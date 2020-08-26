import React, { Component } from 'react'
import './header.css'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import Route from 'react-router-dom/Route'
import 'bootstrap/dist/css/bootstrap.min.css';

import SignUp from './signup'
import Login from './login'
import Home from './home'

class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark ">
                        <div class="container-fluid">
                            <div className="navbar-brand">
                                <img src="../images/images.jpg" style={{ width: 100, marginTop: -7 }} />
                                Flight Booking
                            </div>
                            <ul class="nav navbar-nav navbar-right">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/" exact>Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/signup" exact>Signup</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login" exact>Login</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <Route path="/" exact component={Home} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/login" component={Login} />


                </div>
            </Router>
        )
    }
}

export default Header


