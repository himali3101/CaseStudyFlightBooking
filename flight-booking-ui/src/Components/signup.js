import React, { Component } from 'react'
import './login.css'
import SignUpService from '../Service/signup.service'


class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            registered: false
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
        SignUpService.signup(this.state.email, this.state.password)
            .then(data => {
                this.setState({
                    registered: true
                })
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            })

    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-6 col-md-3">
                        <form class="form-container" onSubmit={this.handleSubmit}>
                            <h2>SignUp Form</h2>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" value={this.state.email} onChange={this.handleEmail} aria-describedby="emailHelp" placeholder="Enter email" />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" value={this.state.password} onChange={this.handlePassword} placeholder="Password" />
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default SignUp