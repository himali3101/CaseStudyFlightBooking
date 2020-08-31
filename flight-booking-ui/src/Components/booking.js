import React, { Component } from 'react'


import BookingService from '../Service/booking.service';
import bookingService from '../Service/booking.service';
import AuthService from '../Service/auth.service';
import FlightService from '../Service/flight.service'

const user = AuthService.getCurrentUser();

class BookingFlight extends Component {

    constructor(props) {
        super(props);

        this.state = {
            flightName: props,
            flight: ''
        }

    }


    componentDidMount() {
        if (user) {
            console.log("********************    " + this.props.name)

            FlightService.getFlightsByName(this.props.name)
                .then(result => {
                    // bookingService.booking(result.flightName, result.from, result.to, result.departureDate,
                    //     result.departureTime, result.arrivaleDate, result.arrivaleTime,
                    //     result.fare, result.totalSeats, result.remainingSeats, result.flightName)
                    //     .then(result => {
                    //         console.log("Booked")
                    //     }) 
                    //     .catch(err => {
                    //         console.log(err)
                    //     })

                })


        }
    }

    render() {
        return (
            <div>
                Hello
            </div>
        )
    }
}

export default BookingFlight