import React, { Component } from 'react'

import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { Redirect, Route } from 'react-router-dom'


import BookingService from '../Service/booking.service';
import AuthService from '../Service/auth.service';
import FlightService from '../Service/flight.service'
import Login from '../Components/login';
import UserService from '../Service/user.service';

const user = AuthService.getCurrentUser();

class BookingHistory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            flightName: props,
            unique: [],
            booking: [],
            user: []
        }

    }


    componentDidMount() {
        BookingService.showAllBooking()
            .then(data => {
                this.setState({
                    booking: data.data.flight
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { booking, unique } = this.state
        const name = booking.map(flight => flight.flightName)
        const uniqueName = new Set(name);
        return (
            <>

                <div>{uniqueName}</div>

            </>
        )
    }
}

export default BookingHistory