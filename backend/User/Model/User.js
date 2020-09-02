const mongoose = require('mongoose');

const userScheme = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    email: {
        type: String,
        required: true,
        unique: true  //unique doesn't help in validation it is only used for performance optimization
    },
    password: { type: String, required: true },
    username: {
        type: String,
    },
    gender: { type: String },
    birthdate: { type: Date },
    phoneNo: { type: Number }
});

module.exports = mongoose.model('User', userScheme)