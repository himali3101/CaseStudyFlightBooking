const mongoose = require('mongoose')
const Flight = require('../Model/Flight')

exports.search = (req, res) => {
    const from = req.body.from
    const to = req.body.to
    const date = new Date(req.body.date)

    Flight.find({ from: from, to: to, date: date })
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