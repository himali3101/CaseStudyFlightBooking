import axios from 'axios';
import authHeader from './auth-hearder';

const API_URL = 'http://localhost:9000/user/';

class UserService {
    getPublicContent(email) {
        return axios.get(API_URL + 'getuser/' + email);
    }

    getUserBoard() {
        return axios.get(API_URL, { headers: authHeader() });
    }

}

export default new UserService();