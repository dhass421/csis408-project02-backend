const mongoose = require('mongoose');

const RequestSchema = new mongoose.Schema({
    message: {
        type: String,
        required: [true, 'Please add a valid message']
    },
    category: {
        type: String,
        required: [true, 'Please choose a category']
    },
    approvalStatus: {
        type: Boolean,
        required: [true, 'Please set approval status']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Request', RequestSchema);