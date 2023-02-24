

module.exports = {
    index
}

function index(req, res) {
    res.render('destinations/index', { title: 'My Destinations' });
}