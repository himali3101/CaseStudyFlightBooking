import React, { Component } from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import Route from 'react-router-dom/Route'

import AddFlight from './FlightDetails/addFlight'
import DisplayFlight from './FlightDetails/displayFlight'
import UpdateFlight from './FlightDetails/updateFlight'

import UserService from '../Service/user.service'

class AdminPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            content: ''
        }
    }

    // componentDidMount() {
    //     UserService.getUserBoard()
    //         .then(response => {
    //             console.log(response)
    //             this.setState({
    //                 content: response.data
    //             })
    //         },
    //             error => {
    //                 this.setState({
    //                     content:
    //                         (error.response &&
    //                             error.response.data &&
    //                             error.response.data.message) ||
    //                         error.message ||
    //                         error.toString()
    //                 })
    //             })
    // }
    render() {
        return (
            <>

                <Router>
                    <div>
                        <nav className="navbar navbar-expand-lg navbar navbar-light bg-light ">
                            <div class="container-fluid">
                                <ul class="nav navbar-nav navbar-right">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/addFlight" exact>Add Flight</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/displayFlight" exact>Display Flight</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/updateFlight" exact>Update Flight</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>

                        <Route path="/addFlight" exact component={AddFlight} />
                        <Route path="/displayFlight" component={DisplayFlight} />
                        <Route path="/updateFight" component={UpdateFlight} />

                    </div>
                </Router>
            </>
        )
    }
}

export default AdminPage