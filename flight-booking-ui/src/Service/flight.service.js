import axios from 'axios';

const API_URL = 'http://localhost:3001/flight/';

class FlightService {
    getFlights() {
        return axios.get(API_URL)
    }

    addFlight(flightName, from, to, departureDate,
        departureTime, arrivaleDate, arrivaleTime,
        fare) {
        return axios.post(API_URL + 'add', {
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