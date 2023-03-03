const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');
const memoriesCtrl = require('../controllers/memories');

// POST /destinations/:id/memories
router.post('/destinations/:id/memories', ensureLoggedIn, memoriesCtrl.create);

// POST(DELETE) /memories/:id
router.delete('/memories/:id', ensureLoggedIn, memoriesCtrl.delete);

module.exports = router;