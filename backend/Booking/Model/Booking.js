const mongoose = require('mongoose')

const bookingSchema = mongoose.Schema({
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
        type: String,
        required: true
    },
    departureTime: {
        type: String,
        required: true
    },
    arrivaleDate: {
        type: String
    },
    arrivaleTime: {
        type: String
    },
    fare: {
        type: String,
        required: true
    },
    totalSeats: {
        type: Number,
        required: true
    },
    remainingSeats: {
        type: Number,
        required: true
    },
    allocatedSeat: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Booking', bookingSchema);