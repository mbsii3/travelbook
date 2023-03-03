const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memorySchema = new Schema ({
    memory: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});

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
        min: '03/03/2023',
        max: '12/31/2030',
        required: true
    },
    purpose: {
        type: String,
        enum: ['Personal', 'Family', 'Business', 'Study Abroad'],
        required: true
    },
    plans: [planSchema],
    memories: [memorySchema],
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Destination', destinationSchema);
