const Destination = require('../models/destination');

module.exports = {
    create,
    delete: deletePlan
}

function create(req, res) {
    Destination.findById(req.params.id, function(err, destination) {
        destination.plans.push(req.body);
        destination.save(function() {
            res.redirect(`/destinations/${destination._id}`);
        });
    });
}

function deletePlan (req, res, next) {
    Destination.findOne({'plans._id': req.params.id}).then(function(destination) {
        if (!destination) return res.redirect('/destinations');
        destination.plans.remove(req.params.id);
        destination.save().then(function() {
            res.redirect(`/destinations/${destination._id}`);
        }).catch(function(err) {
            return next(err);
        });
    });
}