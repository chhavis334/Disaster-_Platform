const supabase = require('../supabaseClient');

exports.getNearbyResources = async (req, res) => {
  const { lat, lon } = req.query;

  const { data, error } = await supabase.rpc('get_nearby_resources', {
    lat_param: parseFloat(lat),
    lon_param: parseFloat(lon),
    distance_meters: 10000
  });

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};
