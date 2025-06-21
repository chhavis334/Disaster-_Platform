const mockPosts = [
  { post: '#floodrelief Need help in Houston', user: 'citizen1' },
  { post: 'Urgent: no water in Brooklyn!', user: 'netrunnerX' }
];

exports.getSocialReports = async (req, res) => {
  res.json(mockPosts);
};
