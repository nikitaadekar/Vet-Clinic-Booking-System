import axios from 'axios';
import {apiConfig} from './config/config';

export class BookingService{
    constructor(){
        this.url = apiConfig.url;

        this.config = {
            bookings:"/bookings"
        }
    }

    /**
     * get bookings
     */

    getBooking(authToken){
        return axios({
            method: 'GET',
            headers:{'Content-Type':'application/json', 'auth-token': authToken},
            url: this.url + this.config.bookings
        })
    }

    /**
     * Add booking
     */
    addBooking(data){
        return axios({
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            url: this.url + this.config.bookings,
            data: data

        })
    }
}