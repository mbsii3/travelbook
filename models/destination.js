const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const destinationSchema = new Schema({
    city: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        min: '02/25/2023',
        max: '01/01/2030',
        required: true
    },
    purpose: {
        type: String,
        enum: ['Personal', 'Family', 'Business', 'Study Abroad'],
        required: true
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('Destination', destinationSchema);
