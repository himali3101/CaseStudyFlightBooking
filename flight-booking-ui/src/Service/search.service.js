import axios from 'axios'

const API_URL = "http://localhost:3002/flight/search"

class SearchService {

    getFlight(from, to, departureDate) {
        return axios
            .post(API_URL, {
                from,
                to,
                departureDate
            })
            .then(response => {
                return response
            })
    }
}

export default new SearchService();