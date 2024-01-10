import axios from 'axios'
import {ValuesType} from 'components/contact/Contact';

const instance = axios.create ( {
    baseURL:
        process.env.NODE_ENV === 'development'
            ? 'http://localhost:3010/sendMessage'
            : 'https://portfolio-server-blush-three.vercel.app/sendMessage',
    // withCredentials: true
})

export const appAPI = {
    sendEmail (values: ValuesType) {
        return  instance.post<string>('', values);
    },
}
