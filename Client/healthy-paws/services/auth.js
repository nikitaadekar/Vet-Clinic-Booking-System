import axios from 'axios';
import {apiConfig} from './config/config';

export class AuthService{
    constructor(){
        this.url = apiConfig.url;

        this.config = {
            login:"/user/login",
            token:"/api/login"
        }
        
    }

    /**
     * login
     */

    login(data){
        return axios({
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            url: this.url + this.config.login,
            data:data
        })
    }

    setTokenCookie(token){
        return axios({
            method: 'POST',
            headers:{'Content-Type':'application/json'},
            url: this.config.token,
            data:JSON.stringify({token:token})
        })
    }

    getTokenCookie(){
        return axios({
            method: 'GET',
            headers:{'Content-Type':'application/json'},
            url: this.config.token,
        })
    }

}