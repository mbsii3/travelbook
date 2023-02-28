const Destination = require('../models/destination');


module.exports = {
    index,
    new: newDestination,
    create,
    showLog,
    delete: deleteDestination,
    update: updateDestination
}

function index(req, res) {
    Destination.find({}, function(err, destinations) {
        res.render('destinations/index', { title: 'My TravelBook', destinations });
    });
}

function newDestination(req, res) {
    res.render('destinations/new', { title: "Add Destination" });
}

function create(req, res) {
    let destination = new Destination(req.body);
    destination.save(function(err) {
        if (err) return res.redirect('/destinations/new');
        res.redirect('/destinations');
    });
}

function showLog(req, res) {
    Destination.findById(req.params.id, function(err, destination) {
        res.render('destinations/show', { title: 'Travel Log', destination});
    });
}

function deleteDestination(req, res) {
    Destination.findByIdAndRemove({ _id: req.params.id }, req.body).then(function() {
        res.redirect('/destinations');
    });
}

function updateDestination(req, res) {
    Destination.findByIdAndUpdate({ _id: req.params.id }, req.body).then(function() {
        res.redirect('/destinations');
    });
}

