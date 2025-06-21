const express = require('express');
const router = express.Router();
const { verifyImage } = require('../controllers/verifyController');

router.post('/:disaster_id/verify-image', verifyImage);

module.exports = router;
