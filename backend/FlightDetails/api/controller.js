const mongoose = require('mongoose')
const Flight = require('../Model/FlightDetails')

exports.getFlights = (req, res) => {
    Flight.find()
        .select('flightName from to fare departureDate departureTime arrivaleDate arrivaleTime _id')
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
                            departureDate: doc.departureDate,
                            departureTime: doc.departureTime,
                            arrivaleDate: doc.arrivaleDate,
                            arrivaleTime: doc.arrivaleTime,
                            fare: doc.fare,
                            _id: doc._id
                        }
                    })
                }
                console.log(docs);
                res.status(200).json(response);
            }
            else {
                res.status(404).json({
                    message: "No Flights Available "
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })
}

exports.getFlightsById = (req, res) => {
    const id = req.params.flightId;
    Flight.findById(id)
        .select('flightName from to fare _id')
        .exec()
        .then(doc => {
            if (doc) {
                const response = {
                    flight: {
                        flightName: doc.flightName,
                        from: doc.from,
                        to: doc.to,
                        departureDate: doc.departureDate,
                        departureTime: doc.departureTime,
                        arrivaleDate: doc.arrivaleDate,
                        arrivaleTime: doc.arrivaleTime,
                        fare: doc.fare,
                        _id: doc._id
                    }
                }
                console.log(doc);
                res.status(200).json(response);
            }
            else {
                res.status(404).json({
                    message: "No Valid entry found for provided ID"
                })
            }
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({ error: err })
        })
}

exports.addFlight = (req, res) => {
    var dDate = new Date('20-08-2020');
    dDate = req.body.departureDate
    var aDate = new Date('20-08-2020');
    aDate = req.body.arrivaleDate;
    const flight = new Flight({
        _id: new mongoose.Types.ObjectId,
        flightName: req.body.flightName,
        from: req.body.from,
        to: req.body.to,
        departureDate: dDate,
        departureTime: req.body.departureTime,
        arrivaleDate: aDate,
        arrivaleTime: req.body.arrivaleTime,
        fare: req.body.fare
    });
    console.log("In add flight")
    flight.save()
        .then(result => {
            res.status(200).json({
                flight: flight
            })
        })
        .catch(err => {
            console.log(err)
            res.status(500).json({
                error: err
            })
        })
}

exports.cancelFlight = (req, res) => {
    Flight.remove({ _id: req.params.flightId })
        .exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            res.status(500).json({
                error: err
            })
        })
}

exports.updateFlight = (req, res) => {
    const id = req.params.flightId;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
    }
    Flight.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json(result)
        })
}