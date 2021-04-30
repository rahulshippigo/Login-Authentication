const mongoose = require('mongoose');

const Data = new mongoose.Schema({
    user: mongoose.Schema.Types.ObjectId,
    work: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255
    },
    updated: {
        type: Date,
        required: true,
        default: Date.now()
    }

});


module.exports = mongoose.model('data', Data);