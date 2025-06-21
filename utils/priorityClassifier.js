const urgentKeywords = ['urgent', 'sos', 'emergency', 'immediate', 'life-threatening'];

function classifyPriority(content) {
  for (let word of urgentKeywords) {
    if (content.toLowerCase().includes(word)) return 'high';
  }
  return 'normal';
}

module.exports = classifyPriority;
module.exports = function classifyPriority(text) {
  const keywords = ['urgent', 'sos', 'emergency', 'critical', 'immediate'];
  for (let word of keywords) {
    if (text.toLowerCase().includes(word)) return 'high';
  }
  return 'normal';
};
