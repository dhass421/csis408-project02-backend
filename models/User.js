const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please add an email address']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password']
    },
    isAdmin: {
        type: String,
        default: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema);