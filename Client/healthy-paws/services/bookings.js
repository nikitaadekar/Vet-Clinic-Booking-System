import axios from 'axios';
import {apiConfig} from './config/config';

export class BookingService{
    constructor(){
        this.url = config.url;

        this.config = {
            bookings:"/bookings"
        }
    }

    /**
     * get bookings
     */

    getBooking(){
        return axios({
            method: 'GET',
            url: this.url + this.config.bookings
        })
    }

    /**
     * Add booking
     */
    addBooking(data){
        return axios({
            method: 'POST',
            url: this.url + this.config.bookings,
            data: data

        })
    }
}