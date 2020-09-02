import React, { Component } from "react";
import AuthService from "../Service/auth.service";
import './profile.css'
import BookingService from '../Service/booking.service'

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: AuthService.getCurrentUser(),
            bookingHistory: []
        };
    }

    componentDidMount() {
        BookingService.showBooking(this.state.currentUser.user.email)
            .then(details => {

                this.setState({
                    bookingHistory: details.data.flight

                })
            })
    }

    render() {
        const { currentUser, bookingHistory } = this.state;

        return (
            <>
                <div className="profile-container">
                    <header className="jumbotron">
                        <h3>
                            <strong>{currentUser.user.email}</strong> Profile
                    </h3>
                    </header>
                    <p>
                        <strong>Id:</strong>{" "}
                        {currentUser.user._id}
                    </p>
                    <p>
                        <strong>Email:</strong>{" "}
                        {currentUser.user.email}
                    </p>
                    <p>
                        <strong>Username:</strong>{" "}
                        {currentUser.user.username}
                    </p>
                    <p>
                        <strong>Gender:</strong>{" "}
                        {currentUser.user.gender}
                    </p>
                    <p>
                        <strong>BirthDate:</strong>{" "}
                        {currentUser.user.birthdate}
                    </p>
                    <p>
                        <strong>Phone No:</strong>{" "}
                        {currentUser.user.phoneNo}
                    </p>

                </div>
                <div className="profile-booking">
                    <h4>Booking History</h4>
                </div>
                {
                    bookingHistory.map(flight => <div key={flight._id}>
                        <div className="displayContainer font-weight-bold">
                            <div className="row" >
                                <div className="col-sm-3 p-4 sideLine">
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
                                    <div className="row p-1 " >
                                        Seat No: {flight.allocatedSeat}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                }

            </>
        );
    }
}