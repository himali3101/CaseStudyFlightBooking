const mongoose = require('mongoose')

const flightSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    flightName: {
        type: String,
        required: true
    },
    from: {
        type: String,
        required: true
    },
    to: {
        type: String,
        required: true
    },
    departureDate: {
        type: Date,
        required: true
    },
    departureTime: {
        type: String,
        required: true
    },
    arrivaleDate: {
        type: Date
    },
    arrivaleTime: {
        type: String
    },
    fare: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Flight', flightSchema);