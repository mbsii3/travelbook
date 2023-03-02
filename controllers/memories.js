const Destination = require('../models/destination');

module.exports = {
    create,
    delete: deleteMemory
}

function create(req, res) {
    Destination.findById(req.params.id, function(err, destination) {
        destination.memories.push(req.body);
        destination.save(function(err) {
            res.redirect(`/destinations/${destination._id}`);
        });
    });
}

function deleteMemory(req, res, next) {
    Destination.findOne({'memories._id': req.params.id}).then(function(destination) {
        if (!destination) return res.direct('/destinations');
        destination.memories.remove(req.params.id);
        destination.save().then(function() {
            res.redirect(`/destinations/${destination._id}`);
        }).catch(function(err) {
            return next(err);
        });
    });
}