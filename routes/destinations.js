const express = require('express');
const router = express.Router();

const destinationsCtrl = require('../controllers/destinations');

// GET /destinations
router.get('/', destinationsCtrl.index);

// GET /destinations/new
router.get('/new', destinationsCtrl.new);

// GET /destinations/:id
router.get('/:id', destinationsCtrl.showLog);

//POST /destinations
router.post('/', destinationsCtrl.create);

// POST(DELETE) /destinations/:id
router.delete('/:id', destinationsCtrl.delete);

// POST(PUT) /destinations/:id
router.put('/:id', destinationsCtrl.update);

module.exports = router;
