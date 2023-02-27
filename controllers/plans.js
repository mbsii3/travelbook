const Destination = require('../models/destination');

module.exports = {
    create
}

function create(req, res) {
    Destination.findById(req.params.id, function(err, destination) {
        destination.plans.push(req.body);
        destination.save(function() {
            res.redirect(`/destinations/${destination._id}`);
        });
    });
}