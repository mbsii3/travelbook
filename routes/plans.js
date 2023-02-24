const express = require('express');
const router = express.Router();

const plansCtrl = require('../controllers/plans');

// POST /destinations/:id/plans
router.post('/destinations/:id/plans', plansCtrl.create);

module.exports = router;