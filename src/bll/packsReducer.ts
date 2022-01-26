import { cardsAPI } from "../api/cards-api"

const initialState = {
    cardPacks: []
}

type InitialStateType = typeof initialState

export const packsReducer = (state: InitialStateType = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "FIND-AND-PAGINATION/SET-PACKS":
            return {...state, cardPacks: action.cardPacks}
        default:
            return state
    }
}

export const setPacks = (cardPacks: any) => {
    return {type: 'FIND-AND-PAGINATION/SET-PACKS', cardPacks} as const
}

export const fetchPacksTC = () => {
    return (dispatch: any) => {
        // dispatch(setPacks())
        cardsAPI.getCards()
            .then(res => {
                dispatch(setPacks(res.data.cardPacks))
            })
    }
}

type ActionType = ReturnType<typeof setPacks>
