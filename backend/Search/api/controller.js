const mongoose = require('mongoose')
const Flight = require('../Model/Flight')

exports.search = (req, res) => {
    const from = req.body.from
    const to = req.body.to
    const departureDate = new Date(req.body.departureDate)

    Flight.find({ from: from, to: to, departureDate: departureDate })
        .then(result => {
            res.status(200).json({
                flights: result
            })
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
} 