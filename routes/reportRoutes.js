const express = require('express');
const router = express.Router();
const { createReport, getReports } = require('../controllers/reportController');

router.post('/', createReport);
router.get('/:disaster_id', getReports);

module.exports = router;
