import React, { Component } from 'react'
import MaterialTable from 'material-table'
import FlightService from '../../Service/flight.service'

var flight;

class UpdateFlight extends Component {

    constructor() {
        super();

        this.state = {
            flights: [],
            columns: [
                {
                    title: 'Flight Name', field: 'flightName'
                },
                {
                    title: 'From', field: 'from'
                }

            ],
            datas: [{ flightName: "Virat", from: "Delhi" }]
        }
    }

    componentDidMount() {
        FlightService.getFlights()
            .then(response => {

                this.setState({
                    flights: response.data.flight
                })
            })
    }



    render() {
        const { flights, columns, datas } = this.state

        return (
            <div>
                <MaterialTable
                    title="Flight Details"
                    columns={[

                        {
                            title: 'Flight Name', field: 'flightName'
                        },
                        {
                            title: 'From', field: 'from'
                        },
                        {
                            title: 'To', field: 'to'
                        },
                        {
                            title: 'DepartureDate', field: 'departureDate'
                        },
                        {
                            title: 'DepartureTime', field: 'departureTime'
                        },
                        {
                            title: 'Arrivale Date', field: 'arrivaleDate'
                        },
                        {
                            title: 'Arrivale Time', field: 'arrivaleTime'
                        },
                        {
                            title: 'Total Seats', field: 'totalSeats'
                        },
                        {
                            title: 'remaining Seats', field: 'remainingSeats'
                        },
                        {
                            title: 'Fare', field: 'fare'
                        }

                    ]}
                    data={query =>
                        new Promise((resolve, reject) => {
                            FlightService.getFlights()
                                .then(response => {
                                    this.setState({
                                        flights: response.data.flight
                                    })
                                    resolve({

                                        data: response.data.flight,
                                        page: response.page - 1,
                                        totalCount: response.total

                                    })
                                })
                        })
                    }
                    editable={{
                        onRowAdd: newData =>
                            new Promise((resolve, reject) => {
                                FlightService.addFlight(newData.flightName, newData.from, newData.to,
                                    newData.departureDate, newData.departureTime, newData.arrivaleDate, newData.arrivaleTime,
                                    newData.totalSeats, newData.fare)
                                    .then(result => {
                                        setTimeout(() => {
                                            //data: ([...flights, newData]);
                                            resolve({
                                                data: ([...flights, newData])
                                            });
                                        }, 1000)
                                    })
                            }),
                        onRowDelete: oldData =>
                            new Promise((resolve, reject) => {
                                FlightService.cancelFlight(oldData.flightName)
                                    .then(result => {
                                        setTimeout(() => {
                                            const dataDelete = [...flights];
                                            const index = oldData.tableData.id;
                                            dataDelete.splice(index, 1);
                                            //setData([...dataDelete]);

                                            resolve({

                                                data: ([...dataDelete])
                                            })
                                        }, 1000)
                                    })
                            }),

                        onRowUpdate: (newData, oldData) =>
                            new Promise((resolve, reject) => {
                                console.log("Promise")
                                FlightService.updateFlight(oldData.flightName, newData.from, newData.to,
                                    newData.departureDate, newData.departureTime, newData.arrivaleDate, newData.arrivaleTime,
                                    newData.totalSeats, newData.fare)
                                    .then(result => {
                                        setTimeout(() => {
                                            const dataUpdate = [...flights];
                                            const index = oldData.tableData.id;
                                            dataUpdate[index] = newData;
                                            //setData([...dataUpdate]);

                                            resolve({

                                                data: ([...dataUpdate])
                                            });
                                        }, 1000)
                                    })

                            })

                    }}
                    options={{
                        search: true,
                        sorting: true
                    }}
                />
            </div>
        )
    }
}

export default UpdateFlight