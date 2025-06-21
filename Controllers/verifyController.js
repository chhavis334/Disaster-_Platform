const axios = require('axios');
const { getCached, setCache } = require('../utils/cache');

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;

exports.verifyImage = async (req, res) => {
  const { image_url } = req.body;
  const cacheKey = `verify:${image_url}`;

  const cached = await getCached(cacheKey);
  if (cached) return res.json(cached);

  try {
    const prompt = `Analyze image at ${image_url} for signs of manipulation or if it depicts a real disaster.`;

    const geminiRes = await axios.post(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      { contents: [{ parts: [{ text: prompt }] }] }
    );

    const result = geminiRes.data.candidates[0].content.parts[0].text.trim();
    const response = { verification_status: result };

    await setCache(cacheKey, response);
    res.json(response);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Error verifying image' });
  }
};
