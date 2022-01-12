import axios from 'axios'


const instance = axios.create({
    baseURL: 'http://localhost:7542/2.0/',
    withCredentials: true,
})

// const data = {
//     email: "nya10-admin@nya.nya",
//     password: "10qazxcvBG"
// }

export const registrationAPI = {
    createUser(email: string, password: string) {
        console.log('createUser')
        return instance.post('auth/register', {email, password})
    }
}

