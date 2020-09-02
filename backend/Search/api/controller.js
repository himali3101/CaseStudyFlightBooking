const mongoose = require('mongoose')
const Flight = require('../Model/Flight')

exports.search = (req, res) => {
    const from = req.body.from
    const to = req.body.to
    //var departureDate = new Date(req.body.departureDate)
    var departureDate = req.body.departureDate + "T00:00:00.000+00:00"
    console.log(departureDate)
    Flight.find({ from: from, to: to, departureDate: departureDate })
        .select('flightName from to fare departureDate departureTime arrivaleDate arrivaleTime totalSeats remainingSeats _id')
        .exec()
        .then(docs => {
            if (docs) {

                const response = {

                    count: docs.length,
                    flight: docs.map(doc => {
                        return {
                            flightName: doc.flightName,
                            from: doc.from,
                            to: doc.to,
                            departureDate: doc.departureDate.getDate() + "-" + (doc.departureDate.getMonth() + 1) + "-" + doc.departureDate.getFullYear(),
                            departureTime: doc.departureTime,
                            arrivaleDate: doc.arrivaleDate.getDate() + "-" + (doc.arrivaleDate.getMonth() + 1) + "-" + doc.arrivaleDate.getFullYear(),
                            arrivaleTime: doc.arrivaleTime,
                            fare: doc.fare,
                            totalSeats: doc.totalSeats,
                            remainingSeats: doc.remainingSeats,
                            _id: doc._id
                        }
                    })
                }
                console.log(response);
                res.status(200).json(response);
            }
            else {
                res.status(404).json({
                    message: "No Flights Available "
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
} 