import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './search.css'

import SearchService from '../Service/search.service'

class SearchFlight extends Component {
    constructor() {
        super();

        this.state = {
            from: '',
            to: '',
            departureDate: '2020-08-20'
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

    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <input type="text" name="from" placeholder="From" className="input-field" value={this.state.from} onChange={this.handleFrom} required />

                        <input type="text" name="to" placeholder="To" className="input-field" value={this.state.to} onChange={this.handleTo} required />

                        <input type="Date" name="departureDate" placeholder="Departure Date" className="input-field" value={this.state.departureDate} onChange={this.handleDepartureDate} required />

                        <button type="submit" class="  btn btn-primary btn-block searchButton">Search</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchFlight