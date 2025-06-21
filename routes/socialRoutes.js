const express = require('express');
const router = express.Router();
const { getSocialReports } = require('../controllers/socialController');

router.get('/:disaster_id', getSocialReports);

module.exports = router;
