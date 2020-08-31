import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './search.css'
import MaterialTable from 'material-table'

import searchService from '../Service/search.service';

import BookingFlight from './booking'

class SearchFlight extends Component {
    constructor() {
        super();

        this.state = {
            from: '',
            to: '',
            departureDate: '',
            searchData: [],
            columns: [
                {
                    title: 'Flight Name', field: 'flightName'
                },
                {
                    title: 'From', field: 'from'
                }

            ],

            display: false,
            displayConfirm: false,
            currentUser: undefined,
            flightName: '',
            addContainer: false

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

    handleFlightName = (event) => {
        this.setState({
            flightName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        searchService.getFlight(this.state.from, this.state.to, this.state.departureDate)
            .then(data => {
                console.log(data.data.flight)
                this.setState({
                    searchData: data.data.flight,
                    display: !this.state.display
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    handleBook = () => {
        this.setState({
            displayConfirm: !this.state.displayConfirm
        })
    }

    handleClose = (event) => {

        window.location.reload();
    }

    handleConfirm = (event) => {

        this.setState({
            addContainer: !this.state.addContainer,
            display: !this.state.display
        })

    }


    render() {
        const { searchData, columns, display, displayConfirm } = this.state
        return (
            <div>

                <form onSubmit={this.handleSubmit} >

                    <div className="searchContainer">

                        <input type="text" name="from" placeholder="From" value={this.state.from} onChange={this.handleFrom} required />

                        <input type="text" name="to" placeholder="To" value={this.state.to} onChange={this.handleTo} required />

                        <input type="Date" name="departureDate" placeholder="Departure Date" value={this.state.departureDate} onChange={this.handleDepartureDate} required />

                        <button type="submit" class="  btn btn-primary btn-block searchButton" >Search</button>

                    </div>


                </form>
                {this.state.addContainer && <BookingFlight name={this.state.flightName} />}
                {display &&

                    searchData.map(flight => <div key={flight._id}>
                        <div>
                            <input type="text" value={this.state.flightName} onChange={this.handleFlightName} />
                            <button className=" btn btn-primary btn-block bookButton" onClick={this.handleBook}>Book</button>

                        </div>
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
                                    <div className="row p-1" >
                                        {flight.totalSeats} {flight.remainingSeats}

                                    </div>

                                    {displayConfirm &&
                                        <div className="popup">
                                            <div className="overlay">
                                                <div className="close" onClick={this.handleClose}>+</div>

                                                <button className="btn btn-primary btn-block confirmButton" onClick={this.handleConfirm}>Confirm Booking</button>

                                            </div>
                                        </div>
                                    }
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



// {
//     display &&
//     <MaterialTable
//         title="Flight Details"
//         columns={[

//             {
//                 title: 'Flight Name', field: 'flightName'
//             },
//             {
//                 title: 'From', field: 'from'
//             },
//             {
//                 title: 'To', field: 'to'
//             },
//             {
//                 title: 'DepartureDate', field: 'departureDate'
//             },
//             {
//                 title: 'DepartureTime', field: 'departureTime'
//             },
//             {
//                 title: 'Arrivale Date', field: 'arrivaleDate'
//             },
//             {
//                 title: 'Arrivale Time', field: 'arrivaleTime'
//             },
//             {
//                 title: 'Total Seats', field: 'totalSeats'
//             },
//             {
//                 title: 'remaining Seats', field: 'remainingSeats'
//             },
//             {
//                 title: 'Fare', field: 'fare'
//             }

//         ]}
//         data={searchData}

//         options={{
//             search: true,
//             sorting: true
//         }}


//     />
// }
