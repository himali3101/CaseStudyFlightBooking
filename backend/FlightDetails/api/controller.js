const mongoose = require('mongoose')
const Flight = require('../Model/FlightDetails')

exports.getFlights = (req, res) => {
    console.log("*****inside get**************")
    Flight.find()
        .select('flightName from to fare departureDate departureTime arrivaleDate arrivaleTime totalSeats remainingSeats _id')
        .exec()
        .then(docs => {
            if (docs) {
                const response = {
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
                //console.log(docs);
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

exports.getFlightsByName = (req, res) => {

    console.log(req.params.flightName)
    Flight.findOne({ flightName: req.params.flightName })
        .select('flightName from to fare departureDate departureTime arrivaleDate arrivaleTime totalSeats remainingSeats _id')
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
                        totalSeats: doc.totalSeats,
                        remainingSeats: doc.remainingSeats,
                        _id: doc._id
                    }
                }
                console.log("*******get flight by name**************" + response.flight);
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
    Flight.find({ flightName: req.body.flightName })
        .then(result => {
            if (result.length > 1) {
                return res.status(409).json({
                    message: "Flgiht Name already exists"
                })
            } else {
                var dDate = new Date()
                var aDate = new Date(req.body.arrivaleDate);
                console.log(req.body.departureDate)
                const flight = new Flight({
                    _id: new mongoose.Types.ObjectId,
                    flightName: req.body.flightName,
                    from: req.body.from,
                    to: req.body.to,
                    departureDate: req.body.departureDate,
                    departureTime: req.body.departureTime,
                    arrivaleDate: req.body.arrivaleDate,
                    arrivaleTime: req.body.arrivaleTime,
                    fare: req.body.fare,
                    totalSeats: req.body.totalSeats,
                    remainingSeats: req.body.totalSeats
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
        })

}

exports.cancelFlight = (req, res) => {
    Flight.remove({ flightName: req.params.flightName })
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
    const name = req.params.flightName;
    const updateOps = {};
    for (const ops of req.body) {
        updateOps[ops.propName] = ops.value;
        console.log(updateOps)
    }
    Flight.update({ flightName: name }, { $set: updateOps })
        .exec()
        .then(result => {
            //console.log(result);
            res.status(200).json(result)
        })
}

exports.update = (req, res) => {
    console.log("HEllo" + req.body.from)
    var dDate = new Date('20-08-2020');
    dDate = req.body.departureDate
    var aDate = new Date('20-08-2020');
    aDate = req.body.arrivaleDate;
    const flight = new Flight({
        flightName: req.body.flightName,
        from: req.body.from,
        to: req.body.to,
        departureDate: dDate,
        departureTime: req.body.departureTime,
        arrivaleDate: aDate,
        arrivaleTime: req.body.arrivaleTime,
        fare: req.body.fare,
        totalSeats: req.body.totalSeats,
        remainingSeats: req.body.totalSeats
    });
    console.log(flight)
    Flight.update({ flightName: req.body.flightName }, { $set: flight })
        .exec()
        .then(result => {
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(err)
        })
}