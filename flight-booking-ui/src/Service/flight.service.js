import axios from 'axios';
import authHeader from './auth-hearder';


const API_URL = 'http://localhost:3001/flight/';

class FlightService {
    getFlights() {
        return axios.get(API_URL)
    }

    getFlightsByName(name) {
        console.log("-------------name---------" + name)
        return axios.get(API_URL + name)

    }

    addFlight(flightName, from, to, departureDate,
        departureTime, arrivaleDate, arrivaleTime, totalSeats,
        fare) {

        console.log(authHeader())
        return axios.post(API_URL + 'add', { headers: authHeader() }, {
            flightName,
            from,
            to,
            departureDate,
            departureTime,
            arrivaleDate,
            arrivaleTime,
            totalSeats,
            fare
        })
    }

    cancelFlight(flightName) {
        return axios.delete(API_URL + flightName)
    }

    updateFlight(flightName, from, to, departureDate,
        departureTime, arrivaleDate, arrivaleTime, totalSeats,
        fare) {
        console.log("update")
        return axios.put(API_URL + 'update/' + flightName, {
            flightName,
            from,
            to,
            departureDate,
            departureTime,
            arrivaleDate,
            arrivaleTime,
            totalSeats,
            fare
        })
    }
}

export default new FlightService();