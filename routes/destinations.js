const express = require('express');
const router = express.Router();

const destinationsCtrl = require('../controllers/destinations');

// GET /destinations
router.get('/', destinationsCtrl.index);

//GET /destinations/new
router.get('/new', destinationsCtrl.new);

//POST /destinations
router.post('/', destinationsCtrl.create);

module.exports = router;
