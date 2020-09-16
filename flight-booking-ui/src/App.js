import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import Route from 'react-router-dom/Route'
//import logo from './logo.svg';
import './App.css';

import AuthService from './Service/auth.service'
import Header from './Components/header'
import AdminPage from './Components/adminPage'
import Home from './Components/home'
import Search from './Components/search'
import Signup from './Components/signup'
import Login from './Components/login'
import AddFlight from './Components/FlightDetails/addFlight'
import DisplayFlight from './Components/FlightDetails/displayFlight'
import UpdateFlight from './Components/FlightDetails/updateFlight'
import Profile from './Components/profile'
import AdminRoutes from './Components/AdminRoute'

const user = AuthService.getCurrentUser();

class App extends Component {
  constructor(props) {
    super();
    this.logout = this.logout.bind(this)

    this.state = {
      showAdminPage: false,
      currentUser: undefined,
      auth: false
    };
  }


  componentDidMount() {
    //this.setState({ height: window.innerHeight + 'px' });
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: AuthService.getCurrentUser(),
        showAdminPage: user.user.email.includes("admin@gmail.com")
      })

    }
  }

  logout() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showAdminPage } = this.state;

    return (
      <Router>
        <div class="SM MD LG" data-observe-resizes>

          <div>
            <nav className="navbar navbar-expand-lg navbar navbar-dark bg-dark ">
              <div class="container-fluid">
                <div className="navbar-brand">
                  <img src="https://lh3.googleusercontent.com/lZUHswicObobNhI5upnRZoAviSOSgoyg7hJTRTB8r5IsNtTZXLuqB5f2EyqC-TYQDQ" style={{ width: 60, marginTop: -7 }} />
                                Flight Booking
                            </div>
                <ul class="nav navbar-nav navbar-right">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/" exact>Home</NavLink>
                  </li>


                  {currentUser ? (
                    <div className="navbar-nav ml-auto">
                      <li className="nav-item">
                        <NavLink to={"/profile"} className="nav-link">
                          {currentUser.user.email}
                        </NavLink>
                      </li>
                      <li className="nav-item">
                        <a href="/logout" className="nav-link" onClick={this.logout}>
                          Logout
                        </a>
                      </li>
                    </div>
                  ) : (
                      <div className="navbar-nav ml-auto">
                        <li className="nav-item">
                          <NavLink to={"/login"} className="nav-link">
                            Login
                        </NavLink>
                        </li>

                        <li className="nav-item">
                          <NavLink to={"/signup"} className="nav-link">
                            Sign Up
                        </NavLink>
                        </li>
                      </div>
                    )}
                </ul>
              </div>
            </nav>

            <Route path="/" exact component={Home} />
            <Route path="/adminpage" component={AdminPage} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/addFlight" exact component={AddFlight} />
            <Route path="/displayFlight" component={DisplayFlight} />
            <AdminRoutes path="/updateFlight" component={UpdateFlight} />
            <Route path="/profile" component={Profile} />



          </div>
        </div>
      </Router>
    );
  }
}
export default App;
