import axios from 'axios';
import {apiConfig} from './config/config';

export class ServicesService{
    constructor(){
        this.url = apiConfig.url;

        this.config = {
            services:"/services"
        }
    }

    /**
     * get services
     */

    getServices(){
        return axios({
            method: 'GET',
            headers:{'Content-Type':'application/json'},
            url: this.url + this.config.services
        })
    }

}