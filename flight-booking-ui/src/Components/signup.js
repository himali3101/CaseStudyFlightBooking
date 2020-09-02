import React, { Component } from 'react'
import './login.css'
import SignUpService from '../Service/signup.service'


class SignUp extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            username: '',
            gender: '',
            birthdate: '',
            phoneNo: '',
            registered: false
        }
    }

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
    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    handleGender = (event) => {
        this.setState({
            gender: event.target.value
        })
    }
    handleBirthdate = (event) => {
        this.setState({
            birthdate: event.target.value
        })
    }
    handlePhoneNo = (event) => {
        this.setState({
            phoneNo: event.target.value
        })
    }
    handleSubmit = (event) => {

        event.preventDefault();
        SignUpService.signup(this.state.email, this.state.password, this.state.username,
            this.state.gender, this.state.birthdate, this.state.phoneNo)
            .then(data => {
                this.setState({
                    registered: true
                })
                console.log(data)
                this.props.history.push('/login')
                window.location.reload();
            })
            .catch(err => {
                console.log(err)
            })

    }

    render() {
        return (
            <div className="bg-model">
                <div className="model-content-signup">
                    <div className="close" onClick={this.handleClose}>+</div>
                    <img src='https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png' alt="User" className="login-img" />
                    <form class="form-container" onSubmit={this.handleSubmit}>

                        <div class="form-group">
                            <input type="email" className="login-input" value={this.state.email} onChange={this.handleEmail} aria-describedby="emailHelp" placeholder="Enter email" />
                        </div>
                        <div class="form-group">
                            <input type="password" className="login-input" value={this.state.password} onChange={this.handlePassword} placeholder="Password" />
                        </div>
                        <div class="form-group">
                            <input type="text" className="login-input" value={this.state.username} onChange={this.handleUsername} placeholder="Enter username" />
                        </div>
                        <div class="form-group">
                            <input type="text" className="login-input" value={this.state.gender} onChange={this.handleGender} placeholder="Enter your gender" />
                        </div>
                        <div class="form-group">
                            <input type="Date" className="login-input" value={this.state.birthdate} onChange={this.handleBirthdate} placeholder="Enter BirthDate" />
                        </div>
                        <div class="form-group">
                            <input type="number" className="login-input" value={this.state.phoneNo} onChange={this.handlePhoneNo} placeholder="Enter Phone no." />
                        </div>


                        <button type="submit" className="login-button">SignUp</button>
                    </form>
                </div>
            </div>

        )
    }
}

export default SignUp