const supabase = require('../supabaseClient');

exports.getCached = async (key) => {
  const { data } = await supabase.from('cache')
    .select('*')
    .eq('key', key)
    .single();

  if (data && new Date(data.expires_at) > new Date()) return data.value;
  return null;
};

exports.setCache = async (key, value, ttlSeconds = 3600) => {
  const expiresAt = new Date(Date.now() + ttlSeconds * 1000).toISOString();
  await supabase.from('cache').upsert({ key, value, expires_at: expiresAt });
};
