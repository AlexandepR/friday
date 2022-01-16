import axios from "axios";
import {LoginResponseType, LoginType} from "./LogInTypes";


const instance = axios.create({
    // baseURL: 'https://neko-back.herokuapp.com/2.0',
    baseURL: 'http://localhost:7542/2.0',
    withCredentials: true
})


export const loginApi = {
    login(data: LoginType) {
        return instance.post<LoginResponseType>('/auth/login', data)
    },
    me() {
        return instance.post<LoginResponseType>('/auth/me')
            .then(res => res.data)
    },
    logout() {
        return instance.delete<LoginResponseType>('/auth/me')
    }
}