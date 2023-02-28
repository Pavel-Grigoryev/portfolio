import axios from 'axios'
import {ValuesType} from "../components/contact/Contact";

const instance = axios.create ( {
    baseURL:
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3010/sendMessage'
            : 'https://neko-back.herokuapp.com/2.0/',
    // withCredentials: true
})

export const appAPI = {
    sendEmail (values: ValuesType) {
        return  instance.post<string>('', values);
    },
}