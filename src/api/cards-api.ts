import axios from "axios";

const instance = axios.create({
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

export const cardsAPI = {
    getCards(page?: number,
             searchValue?: string,
             sortPacksName?: number,
             sortPacksCards?: number, // не работает
             maxCardsCount?: number,
             minCardsCount?: number,
    ) {
        return instance.get(`cards/pack?&packName=${searchValue}&min=${minCardsCount}&max=${maxCardsCount}&sortPacks=${sortPacksName}name&page=${page}&pageCount=10`)
    },
}
