import axios from 'axios';
import authHeader from './auth-hearder';


const API_URL = 'http://localhost:3001/flight/';

class FlightService {
    getFlights() {
        return axios.get(API_URL)
    }

    addFlight(flightName, from, to, departureDate,
        departureTime, arrivaleDate, arrivaleTime,
        fare) {
        console.log("add" + authHeader()["x-access-token"])
        return axios.post(API_URL + 'add', { headers: authHeader() }, {
            flightName,
            from,
            to,
            departureDate,
            departureTime,
            arrivaleDate,
            arrivaleTime,
            fare
        })
    }
}

export default new FlightService();