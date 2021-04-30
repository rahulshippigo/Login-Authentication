const mongoose = require('mongoose');

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    phone: {
        type: String,
        required: true,
        min: 0,
        max: 255,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        min: 0,
        max: 255
    },
    password: {
        type: String,
        required: true,
        min: 0,
        max: 255
    }
});


module.exports = mongoose.model('User', User);