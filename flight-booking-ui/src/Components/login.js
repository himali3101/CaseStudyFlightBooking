import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './login.css'

import AdminPage from './adminPage'

import AuthService from '../Service/auth.service'


import Form from "react-validation/build/form";
import Input from "react-validation/build/input";

import { isEmail } from "validator";


const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

const email = value => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};


class Login extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            loading: false,
            message: ""
        }
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

        this.setState({
            message: "",
            loading: true
        });
        AuthService.login(this.state.email, this.state.password).then(
            data => {
                if (data) {
                    this.props.history.push('/addFlight')
                    window.location.reload();
                    console.log(data)
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


    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-6 col-md-3">
                        <Form class="form-container" onSubmit={this.handleSubmit} ref={c => {
                            this.form = c;
                        }}>
                            <h2>Login Form</h2>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <Input type="email" class="form-control" value={this.state.email} onChange={this.handleEmail} aria-describedby="emailHelp" placeholder="Enter email" validations={[required]} />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <Input type="password" class="form-control" value={this.state.password} onChange={this.handlePassword} placeholder="Password" validations={[required]} />
                            </div>
                            <button type="submit" class="btn btn-primary btn-block" disabled={this.state.loading}>{this.state.loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}Submit</button>

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

            </div>
        )
    }

    // <input class="button" type="submit" (click) = "signup(userName.value, password.value, userType.value)" />

}

export default Login;