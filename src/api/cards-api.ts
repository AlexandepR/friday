import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

export const cardsAPI = {
    getCards(page?: number) {
        return instance.get(`cards/pack?page=${page}&pageCount=10`)
    },
    // getPage(page: number) {
    //     return instance.get(`cards/pack?&page=${page}&pageCount=10`)
    // }
}

// packName=english

// export type cardsApiType = {
//     cardsCount?: number
//     created?: string
//     deckCover?: any
//     grade?: number
//     more_id?: string
//     name?: string
//     path?: string
//     private?: boolean
//     rating?: number
//     shots?: number
//     type?: string
//     updated?: string
//     user_id?: string
//     user_name?: string
//     __v?: number
//     _id?: string
// }