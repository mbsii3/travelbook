const express = require('express');
const router = express.Router();
const ensureLoggedIn = require('../config/ensureLoggedIn');
const plansCtrl = require('../controllers/plans');

// POST /destinations/:id/plans
router.post('/destinations/:id/plans', ensureLoggedIn, plansCtrl.create);

router.delete('/plans/:id', ensureLoggedIn, plansCtrl.delete);

module.exports = router;