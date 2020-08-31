const mongoose = require('mongoose')
const Booking = require('../Model/Booking')
const axios = require('axios')

exports.showBooking = (req, res) => {
    Booking.find({ flightName: req.params.flightName, email: req.params.email })
        .then(result => {
            return result
        })
        .catch(err => {
            return err
        })
}

exports.getBooking = (req, res) => {
    const remaining = req.body.remainingSeats
    console.log(req.body.from + "*****************=============")
    const book = axios.get("http://localhost:3001/flight/" + req.body.flightName)
        .then(result => {
            console.log("****************booking************" + req.body.remainingSeats)
            if (remaining > 0) {

                var dDate = new Date("31-08-2020");
                dDate = req.body.departureDate
                var aDate = new Date("31-08-2020");
                aDate = req.body.arrivaleDate;
                const booking = new Booking({
                    _id: new mongoose.Types.ObjectId,
                    flightName: req.body.flightName,
                    from: req.body.from,
                    to: req.body.to,
                    departureDate: dDate,
                    departureTime: req.body.departureTime,
                    arrivaleDate: aDate,
                    arrivaleTime: req.body.arrivaleTime,
                    fare: req.body.fare,
                    totalSeats: req.body.totalSeats,
                    remainingSeats: req.body.remainingSeats - 1,
                    allocatedSeat: (req.body.totalSeats - (req.body.remainingSeats - 1)),
                    email: req.body.email
                });
                booking.save()
                    .then(saveResult => {
                        console.log(saveResult.remainingSeats)
                        axios.patch("http://localhost:3001/flight/" + saveResult.flightName, [{ "propName": "remainingSeats", "value": saveResult.remainingSeats }])
                            .then(updateDate => {
                                console.log("patch" + updateDate.data.remainingSeats)
                                res.status(200).json({
                                    message: "Booking done your Seat no. is" + saveResult.allocatedSeat
                                })
                            })
                            .catch(err => {
                                console.log("error")
                            })

                    })
                    .catch(err => {
                        console.log(err)
                    })
            }
            else {
                res.status('409').json({
                    message: "No Seat Available"
                })
            }

        })
        .catch(err => {
            console.log(err.data)
            res.status(500).json({
                message: err
            })
        })

}

