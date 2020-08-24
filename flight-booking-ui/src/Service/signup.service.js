import axios from 'axios'

const API_URL = "http://localhost:9000/user/signup"

class SignUpService {

    signup(email, password) {
        return axios
            .post(API_URL, {
                email,
                password
            })
            .then(response => {
                return response
            })
    }
}

export default new SignUpService();