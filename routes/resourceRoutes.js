const express = require('express');
const router = express.Router();
const { getNearbyResources } = require('../controllers/resourceController');

router.get('/:disaster_id/resources', getNearbyResources);

module.exports = router;
