const express = require('express');
const router = express.Router();
const { extractAndGeocode } = require('../controllers/geocodeController');

router.post('/', extractAndGeocode);

module.exports = router;
