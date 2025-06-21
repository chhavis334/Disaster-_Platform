const supabase = require('../supabaseClient');
const classifyPriority = require('../utils/priorityClassifier');

exports.createReport = async (req, res) => {
  const { disaster_id, user_id, content, image_url } = req.body;
  const priority = classifyPriority(content);

  const { data, error } = await supabase.from('reports').insert([
    { disaster_id, user_id, content, image_url, verification_status: 'pending', priority }
  ]);

  if (error) return res.status(500).json({ error: error.message });

  // emit to WebSocket here later
  res.status(201).json(data);
};

exports.getReports = async (req, res) => {
  const { disaster_id } = req.params;
  const { data, error } = await supabase
    .from('reports')
    .select('*')
    .eq('disaster_id', disaster_id);

  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
};
