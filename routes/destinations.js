const express = require('express');
const router = express.Router();

const destinationsCtrl = require('../controllers/destinations');

// GET /destinations
router.get('/', destinationsCtrl.index);

module.exports = router;
