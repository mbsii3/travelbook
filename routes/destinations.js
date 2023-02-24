const express = require('express');
const router = express.Router();

const destinationsCtrl = require('../controllers/destinations');

// GET /destinations
router.get('/', destinationsCtrl.index);

//GET /destinations/new
router.get('/new', destinationsCtrl.new);

// GET /destinations/:id
router.get('/:id', destinationsCtrl.show);

//POST /destinations
router.post('/', destinationsCtrl.create);

// POST(DELETE) /destinations/:id
// router.delete('/:id', destinationsCtrl.delete);

module.exports = router;
