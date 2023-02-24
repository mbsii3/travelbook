const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    city: String
})

module.exports = mongoose.model('Destination', destinationSchema);