import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true
})

export const forgotAPI = {
    forgotEmail(email: string) {

        const payload = {
            email: email, // придет из инпута
            from: 'test-front-admin <1274646a1a@ygmail.com>', // можно указать разработчика фронта)
            message: `<div style="background-color: lime; padding: 15px">
        password recovery link:
        <a href='http://localhost:3000/#/set-new-password/$token$'>
        link</a></div>` // хтмп-письмо, вместо $token$ бэк вставит токен
}

        return instance.post('auth/forgot', payload)
    }
}