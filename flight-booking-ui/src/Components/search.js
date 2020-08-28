import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './search.css'

import SearchService from '../Service/search.service'
import searchService from '../Service/search.service';

class SearchFlight extends Component {
    constructor() {
        super();

        this.state = {
            from: '',
            to: '',
            departureDate: '2020-08-20',
            searchData: []
        }
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

    handleSubmit = (event) => {
        event.preventDefault();
        searchService.getFlight(this.state.from, this.state.to, this.state.departureDate)
            .then(data => {
                console.log(data)
                this.setState({
                    searchData: data.data.flights
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        const { searchData } = this.state
        return (
            <div>

                <form onSubmit={this.handleSubmit} className="searchContainer">
                    <div className="row">
                        <input type="text" name="from" placeholder="From" className="input-field" value={this.state.from} onChange={this.handleFrom} required />

                        <input type="text" name="to" placeholder="To" className="input-field" value={this.state.to} onChange={this.handleTo} required />

                        <input type="Date" name="departureDate" placeholder="Departure Date" className="input-field" value={this.state.departureDate} onChange={this.handleDepartureDate} required />

                        <button type="submit" class="  btn btn-primary btn-block searchButton">Search</button>
                    </div>
                </form>

                {
                    searchData.map(flight => <div key={flight._id}>
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

export default SearchFlight