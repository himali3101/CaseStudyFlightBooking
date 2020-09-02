import axios from 'axios'

const API_URL = "http://localhost:9000/user/signup"

class SignUpService {

    signup(email, password, username,
        gender,
        birthdate,
        phoneNo) {
        return axios
            .post(API_URL, {
                email,
                password,
                username,
                gender,
                birthdate,
                phoneNo
            })
            .then(response => {
                return response
            })
    }
}

export default new SignUpService();