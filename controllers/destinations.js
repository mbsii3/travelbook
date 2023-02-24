const Destination = require('../models/destination');

module.exports = {
    index,
    new: newDestination,
    create
}

function index(req, res) {
    Destination.find({}, function(err, destinations) {
        res.render('destinations/index', { title: 'My Destinations', destinations });
    });
}

function newDestination(req, res) {
    res.render('destinations/new', { title: "Add Destination" });
}

function create(req, res) {
    let destination = new Destination(req.body);
    destination.save(function(err) {
        console.log(destination);
        if (err) return res.redirect('/destinations/new');
        res.redirect('/destinations');
    });
}