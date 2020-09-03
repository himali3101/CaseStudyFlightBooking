import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'

import AuthService from '../Service/auth.service'

import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import { isEmail } from "validator";
//import { model } from '../../../backend/FlightDetails/Model/FlightDetails';

var email;
var required;

class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            loading: false,
            message: " "
        }
    }


    required = value => {
        if (value == '') {
            return (
                <div className="alert alert-danger" role="alert">
                    This field is required!
                </div>
            );
        }
    };

    email = value => {
        if (!isEmail(value)) {
            return (
                <div className="alert alert-danger" role="alert">
                    This is not a valid email.
                </div>
            );
        }
    };

    handleClose = (event) => {
        this.props.history.push('/')
        window.location.reload();
    }

    handleEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.email || this.state.password === '') {
            console.log("Checking")
            this.setState({
                message: "Enter Both Values"
            })
        }
        else {
            this.setState({
                message: "",
                loading: true
            });
            AuthService.login(this.state.email, this.state.password).then(
                data => {
                    console.log(data)
                    if (data.user.email === 'admin@gmail.com') {
                        this.props.history.push('/updateFlight')
                        window.location.reload();
                    } else {

                        this.props.history.push('/')
                        window.location.reload();
                        console.log(data.Token)
                    }

                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );

        }

    }


    render() {
        return (

            <div className="bg-model">
                <div className="model-content">
                    <div className="close" onClick={this.handleClose}>+</div>
                    <img src='https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png' alt="User" className="login-img" />
                    <Form className="form-container" onSubmit={this.handleSubmit} ref={c => {
                        this.form = c;
                    }}>

                        <div class="form-group">
                            <input type="email" className="login-input" value={this.state.email} onChange={this.handleEmail} aria-describedby="emailHelp" placeholder="Enter email" validations={[required]} />
                        </div>
                        <div class="form-group">

                            <input type="password" className="login-input" value={this.state.password} onChange={this.handlePassword} placeholder="Password" validations={[required]} />
                        </div>
                        <button type="submit" className="login-button" disabled={this.state.loading}>{this.state.loading && (
                            <span className="spinner-border spinner-border-sm"></span>
                        )}Login</button>

                        {this.state.message && (
                            <div className="form-group">
                                <div className="alert alert-danger" role="alert">
                                    {this.state.message}
                                </div>
                            </div>
                        )}
                    </Form>
                </div>
            </div>

        )
    }


}

export default Login;