import React, { Component } from 'react'
import './login.css'
import SignUpService from '../Service/signup.service'

const validEmailRegex = RegExp(
    /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = errors => {
    let valid = true;
    Object.values(errors).forEach(val => val.length > 0 && (valid = false));
    return valid;
};


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
            registered: false,
            errors: {
                email: '',
                password: '',
                username: '',
                gender: '',
                birthdate: '',
                phoneNo: ''
            }
        }
    }

    handleChange = (event) => {
        event.preventDefault();
        const { name, value } = event.target;
        let errors = this.state.errors;

        switch (name) {
            case 'email':
                errors.email =
                    validEmailRegex.test(value)
                        ? ''
                        : 'Email is not valid!';
                break;
            case 'password':
                errors.password =
                    value.length < 8
                        ? 'Password must be at least 8 characters long!'
                        : '';
                break;
            case 'username':
                errors.username =
                    value.length < 4
                        ? 'Password must be at least 4 characters long!'
                        : '';
                break;
            case 'gender':
                errors.gender =
                    value === "male" || value === "female" || value === "other"
                        ? ''
                        : 'value of gender must be male or female or other';
                break;
            case 'phoneNo':
                errors.phoneNo =
                    (value.length > 10 || value.length < 10)
                        ? 'Phone must contain 10 numbers'
                        : '';
                break;



            default:
                break;
        }

        this.setState({ errors, [name]: value });
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
        const { errors } = this.state
        return (
            <div className="bg-model">
                <div className="model-content-signup">
                    <div className="close" onClick={this.handleClose}>+</div>
                    <img src='https://cdn2.iconfinder.com/data/icons/audio-16/96/user_avatar_profile_login_button_account_member-512.png' alt="User" className="login-img" />
                    <form class="form-container" onSubmit={this.handleSubmit}>

                        <div class="form-group">
                            <input type="email" name="email" className="login-input" value={this.state.email} onChange={this.handleEmail, this.handleChange} aria-describedby="emailHelp" placeholder="Enter email" noValidate />
                            {errors.email.length > 0 &&
                                <span className='error' style={{ color: "red" }}>{errors.email}</span>}
                        </div>
                        <div class="form-group">
                            <input type="password" name="password" className="login-input" value={this.state.password} onChange={this.handlePassword, this.handleChange} placeholder="Password" noValidate />
                            {errors.password.length > 0 &&
                                <span className='error' style={{ color: "red" }}>{errors.password}</span>}
                        </div>
                        <div class="form-group">
                            <input type="text" name="username" className="login-input" value={this.state.username} onChange={this.handleUsername, this.handleChange} placeholder="Enter username" noValidate />
                            {errors.username.length > 0 &&
                                <span className='error' style={{ color: "red" }}>{errors.username}</span>}
                        </div>
                        <div class="form-group">
                            <input type="text" name="gender" className="login-input" value={this.state.gender} onChange={this.handleGender, this.handleChange} placeholder="Enter your gender" noValidate />
                            {errors.gender.length > 0 &&
                                <span className='error' style={{ color: "red" }}>{errors.gender}</span>}
                        </div>
                        <div class="form-group">
                            <input type="Date" name="birthdate" className="login-input" value={this.state.birthdate} onChange={this.handleBirthdate, this.handleChange} placeholder="Enter BirthDate" noValidate />
                            {errors.birthdate.length > 0 &&
                                <span className='error' style={{ color: "red" }}>{errors.birthdate}</span>}
                        </div>
                        <div class="form-group">
                            <input type="number" name="phoneNo" className="login-input" value={this.state.phoneNo} onChange={this.handlePhoneNo, this.handleChange} placeholder="Enter Phone no." noValidate />
                            {errors.phoneNo.length > 0 &&
                                <span className='error' style={{ color: "red" }}>{errors.phoneNo}</span>}
                        </div>


                        <button type="submit" className="login-button" noValidate>SignUp</button>
                    </form>
                </div>
            </div>

        )
    }
}

export default SignUp