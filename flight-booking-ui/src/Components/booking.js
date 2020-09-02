import React, { Component } from 'react'

import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import { Redirect, Route } from 'react-router-dom'


import BookingService from '../Service/booking.service';
import bookingService from '../Service/booking.service';
import AuthService from '../Service/auth.service';
import FlightService from '../Service/flight.service'
import Login from '../Components/login';
import UserService from '../Service/user.service';

const user = AuthService.getCurrentUser();

class BookingFlight extends Component {

    constructor(props) {
        super(props);

        this.state = {
            flightName: props,
            flight: '',
            booking: [],
            notLoggedIn: false,
            isLoggedIn: false,
            user: []
        }

    }


    componentDidMount() {
        if (user) {
            this.setState({
                notLoggedIn: false,
                isLoggedIn: true
            })


            FlightService.getFlightsByName(this.props.name)
                .then(result => {

                    const flight = result.data.flight
                    bookingService.booking(flight.flightName, flight.from, flight.to, flight.departureDate,
                        flight.departureTime, flight.arrivaleDate, flight.arrivaleTime,
                        flight.fare, flight.totalSeats, flight.remainingSeats, user.user.email)
                        .then(result => {

                            UserService.getPublicContent(user.email)
                                .then(user => {

                                    this.setState({
                                        user: user.data.user
                                    })
                                })
                                .catch(err => {
                                    console.log(err)
                                })
                            this.setState({
                                flight: result.data.booking
                            })
                        })
                        .catch(err => {
                            console.log(err)
                        })

                })




        }
        else {
            this.setState({
                notLoggedIn: true
            })
        }
    }

    render() {
        const { flight, user } = this.state
        return (
            <Router>
                {
                    this.state.isLoggedIn &&
                    <div>
                        <h2>Booking Details</h2>
                        <div className="displayContainer font-weight-bold">
                            <div className="ticket-header">
                                <div className="row" >
                                    <h3>Flight Ticket</h3>
                                </div>
                            </div>
                            <div className="row" >
                                <div className="col-sm-3 p-8 sideLine">
                                    <div className="row p-2">
                                        Passenger Name
                                    </div>
                                    <div className="row p-2" >
                                        {user.username}
                                    </div>

                                    <div className="row p-2">
                                        Flight Name
                                    </div>
                                    <div className="row p-2" >
                                        {flight.flightName}
                                    </div>
                                </div>

                                <div className="col-sm-2">
                                    <div className="row p-1 font-weight-light" >
                                        Departure
                                    </div>
                                    <div className="row p-1" >
                                        {flight.from}
                                    </div>
                                    <div className="row p-1" >
                                        {flight.departureDate}
                                    </div>
                                    <div className="row p-1" >
                                        {flight.departureTime}
                                    </div>
                                </div>
                                <div className="col-sm-1 font-weight-light">
                                    to
                                </div>
                                <div className="col-sm-2">
                                    <div className="row p-1 font-weight-light" >
                                        Arrivale
                                    </div>
                                    <div className="row p-1" >
                                        {flight.to}
                                    </div>
                                    <div className="row p-1" >
                                        {flight.arrivaleDate}
                                    </div>
                                    <div className="row p-1" >
                                        {flight.arrivaleTime}
                                    </div>
                                </div>

                                <div className="col-sm-4 p-5">
                                    <div className="row" >
                                        Fare : {flight.fare}
                                    </div>

                                    <div className="row" >
                                        Seat No : {flight.allocatedSeat}
                                    </div>
                                </div>

                                <div className="ticket-footer">
                                    <div className="row p-1">

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>

                }
                {this.state.notLoggedIn &&
                    <Redirect to="/login" />
                }
                <Route path="/login" component={Login} />
            </Router>
        )
    }
}

export default BookingFlight