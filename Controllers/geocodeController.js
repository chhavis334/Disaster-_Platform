const axios = require('axios');
const { getCached, setCache } = require('../utils/cache');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
const MAPBOX_API_KEY = process.env.MAPBOX_API_KEY;

exports.extractAndGeocode = async (req, res) => {
  const { description } = req.body;
  const cacheKey = `geocode:${description}`;

  const cached = await getCached(cacheKey);
  if (cached) return res.json(cached);

  try {
    // Gemini Location Extraction
    const geminiPrompt = `Extract location name from the following disaster description: "${description}"`;
    const geminiRes = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      { contents: [{ parts: [{ text: geminiPrompt }] }] }
    );

    const locationName = geminiRes.data.candidates[0].content.parts[0].text.trim();

    // Mapbox Geocoding
    const mapboxRes = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(locationName)}.json`, {
      params: {
        access_token: MAPBOX_API_KEY,
      },
    });

    const [lon, lat] = mapboxRes.data.features[0].center;
    const result = { location_name: locationName, lat, lon };

    await setCache(cacheKey, result);
    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error extracting and geocoding location' });
  }
};
