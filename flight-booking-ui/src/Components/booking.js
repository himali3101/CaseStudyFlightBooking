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
                    console.log(result.data.flight.flightName)
                    const flight = result.data.flight
                    bookingService.booking(flight.flightName, flight.from, flight.to, flight.departureDate,
                        flight.departureTime, flight.arrivaleDate, flight.arrivaleTime,
                        flight.fare, flight.totalSeats, flight.remainingSeats, flight.flightName)
                        .then(result => {
                            console.log("Booked")
                        })
                        .catch(err => {
                            console.log(err)
                        })

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