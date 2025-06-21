const supabase = require('../supabaseClient');

// Create a new disaster
exports.createDisaster = async (req, res) => {
  const { title, location_name, description, tags, owner_id } = req.body;

  const { data, error } = await supabase.from('disasters').insert([
    { title, location_name, description, tags, owner_id }
  ]);

  if (error) return res.status(500).json({ error: error.message });

  res.status(201).json(data);
};

// Get disasters (filter by tag if provided)
exports.getDisasters = async (req, res) => {
  const tag = req.query.tag;

  let query = supabase.from('disasters').select('*');

  if (tag) {
    query = query.contains('tags', [tag]);
  }

  const { data, error } = await query;

  if (error) return res.status(500).json({ error: error.message });

  res.json(data);
};
