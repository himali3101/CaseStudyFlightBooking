import axios from 'axios'
import authHeader from './auth-hearder';

const API_URL = "http://localhost:3003/book/"

class BookingService {

    booking(flightName, from, to, departureDate,
        departureTime, arrivaleDate, arrivaleTime,
        fare, totalSeats, remainingSeats, email) {

        console.log(flightName, from, to, departureDate,
            departureTime, arrivaleDate, arrivaleTime,
            fare, totalSeats, remainingSeats, email)

        return axios
            .post(API_URL + "flight", {
                flightName, from, to, departureDate,
                departureTime, arrivaleDate, arrivaleTime,
                fare, totalSeats, remainingSeats, email

            }, { headers: authHeader() })
            .then(response => {
                console.log(response)
                return response
            })
    }

    showBooking(email) {

        return axios
            .get(API_URL + email)
            .then(result => {
                return result
            })
            .catch(err => {
                return err
            })
    }


    showAllBooking() {
        return axios
            .get(API_URL)
            .then(result => {
                return result
            })
            .catch(err => {
                return err
            })
    }

}


export default new BookingService();