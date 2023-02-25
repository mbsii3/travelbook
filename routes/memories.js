const express = require('express');
const router = express.Router();

const memoriesCtrl = require('../controllers/memories');

// POST /destinations/:id/memories
router.post('/destinations/:id/memories', memoriesCtrl.create);

module.exports = router;