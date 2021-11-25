import axios from 'axios';
import {apiConfig} from './config/config';

export class AuthService{
    constructor(){
        this.url = apiConfig.url;

        this.config = {
            login:"/user/login",
        }
    }

    /**
     * get bookings
     */

    login(){
        return axios({
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            url: this.url + this.config.bookings
        })
    }

}