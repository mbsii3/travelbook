const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const planSchema = new Schema({
    plan: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

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
    plans: [planSchema]
}, {
    timestamps: true
});

module.exports = mongoose.model('Destination', destinationSchema);
