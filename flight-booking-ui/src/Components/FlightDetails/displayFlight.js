import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import FlightService from '../../Service/flight.service'

import './displayFlight.css'

class DisplayFlight extends Component {

    constructor() {
        super();

        this.state = {
            flights: []
        }
    }
    componentDidMount() {
        FlightService.getFlights()
            .then(response => {
                console.log(response.data.flight)
                this.setState({
                    flights: response.data.flight
                })
            })
    }

    render() {
        const { flights } = this.state
        return (
            <div>
                {
                    flights.map(flight => <div key={flight._id}>
                        <div className="displayContainer">
                            <div className="row">
                                <div className="col-sm-4">
                                    Flight Name :{flight.flightName}
                                </div>
                                <div className="col-sm-4">
                                    From : {flight.from}
                                </div>
                                <div className="col-sm-4">
                                    To : {flight.to}
                                </div>
                                <div className="col-sm-4">
                                    Departure Date : {flight.departureDate}
                                </div>
                                <div className="col-sm-2">
                                    Departure Time : {flight.departureTime}
                                </div>
                                <div className="col-sm-2">
                                    Arrivale Time :{flight.arrivaleTime}
                                </div>
                                <div className="col-sm-2">
                                    Fare : {flight.fare}
                                </div>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        )
    }
}

export default DisplayFlight

