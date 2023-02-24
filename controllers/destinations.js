const Destination = require('../models/destination');

module.exports = {
    index,
    new: newDestination,
    create
}

function index(req, res) {
    res.render('destinations/index', { title: 'My Destinations' });
}

function newDestination(req, res) {
    res.render('destinations/new', { title: "Add Destination" });
}

function create(req, res) {
    let destination = new Destination(req.body);
    destination.save(function(err) {
        if (err) return res.redirect('/destinations/new');
        res.redirect('/');
    });
}