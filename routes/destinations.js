const express = require('express');
const router = express.Router();

const destinationsCtrl = require('../controllers/destinations');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// GET /destinations
router.get('/', ensureLoggedIn, destinationsCtrl.index);

// GET /destinations/new
router.get('/new', ensureLoggedIn, destinationsCtrl.new);

// GET /destinations/:id
router.get('/:id', ensureLoggedIn, destinationsCtrl.showLog);

//POST /destinations
router.post('/', ensureLoggedIn, destinationsCtrl.create);

// POST(DELETE) /destinations/:id
router.delete('/:id', ensureLoggedIn, destinationsCtrl.delete);

// POST(PUT) /destinations/:id
router.put('/:id', ensureLoggedIn, destinationsCtrl.update);

module.exports = router;
