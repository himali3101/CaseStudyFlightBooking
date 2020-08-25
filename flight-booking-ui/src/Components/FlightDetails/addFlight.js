import React, { Component } from 'react'

import { Button, FormGroup } from 'react-bootstrap'

import './addFlight.css'
import FlightService from '../../Service/flight.service'

class AddFlight extends Component {
    constructor() {
        super();

        this.state = {
            flightName: '',
            from: '',
            to: '',
            departureDate: '2020-08-20',
            departureTime: '',
            arrivaleDate: '2020-08-20',
            arrivaleTime: '',
            fare: ''
        }
    }

    handleFlightName = (event) => {
        this.setState({
            flightName: event.target.value
        })
    }

    handleFrom = (event) => {
        this.setState({
            from: event.target.value
        })
    }

    handleTo = (event) => {
        this.setState({
            to: event.target.value
        })
    }

    handleDepartureDate = (event) => {
        this.setState({
            departureDate: event.target.value
        })
    }

    handleDepartureTime = (event) => {
        this.setState({
            departureTime: event.target.value
        })
    }

    handleArrivaleDate = (event) => {
        this.setState({
            arrivaleDate: event.target.value
        })
    }

    handleArrivaleTime = (event) => {
        this.setState({
            arrivaleTime: event.target.value
        })
    }

    handleFare = (event) => {
        this.setState({
            fare: event.target.value
        })
    }

    handleSubmit = (event) => {

        event.preventDefault();
        FlightService.addFlight(this.state.flightName, this.state.from, this.state.to,
            this.state.departureDate, this.state.departureTime,
            this.state.arrivaleDate, this.state.arrivaleTime, this.state.fare)
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })

    }

    render() {
        return (
            <div>
                <form className="container" onSubmit={this.handleSubmit}>
                    <div className="text">
                        <h1>Add Flight</h1>
                        <FormGroup>
                            <label for="flightName">Flight Name :</label>
                            <input type="text" name="flightName" id="flightName" placeholder="Fight Name" value={this.state.flightName} onChange={this.handleFlightName} required />
                        </FormGroup>

                        <FormGroup>
                            <label for="from">From:</label>
                            <input type="text" name="from" id="from" placeholder="From" value={this.state.from} onChange={this.handleFrom} required />

                        </FormGroup>

                        <FormGroup>
                            <label for="to">To :</label>
                            <input type="text" name="to" id="to" placeholder="To" value={this.state.to} onChange={this.handleTo} required />

                        </FormGroup>

                        <FormGroup>
                            <label for="departureDate">Departure Date : </label>
                            <input type="Date" name="departureDate" id="departureDate" placeholder="Departure Date" value={this.state.departureDate} onChange={this.handleDepartureDate} required />

                        </FormGroup>

                        <FormGroup>
                            <label for="departureTime">Departure Time :</label>
                            <input type="text" name="departureTime" id="departureTime" placeholder="Departure Time" value={this.state.departureTime} onChange={this.handleDepartureTime} required />

                        </FormGroup>

                        <FormGroup>
                            <label for="arrivaleDate">Arrivale Date:</label>
                            <input type="date" name="arrivaleDate" to="arrivaleDate" placeholder="Arrivale Date" value={this.state.arrivaleDate} onChange={this.handleArrivaleDate} />

                        </FormGroup>

                        <FormGroup >
                            <label for="arrivaleTime">Arrivale Time:</label>
                            <input type="text" name="arrivaleTime" id="arrivaleTime" placeholder="Arrivale Time" value={this.state.arrivaleTime} onChange={this.handleArrivaleTime} required />

                        </FormGroup >

                        <FormGroup >
                            <label for="fare">Fare :</label>
                            <input type="text" name="fare" id="fare" placeholder="Fare" value={this.state.fare} onChange={this.handleFare} required />

                        </FormGroup >

                        <div>
                            <button type="submit" class="btn btn-primary button">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddFlight