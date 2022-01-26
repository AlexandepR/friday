import {cardsAPI} from "../api/cards-api";
import { setPacks } from "./packsReducer";

const initState = {
    // searchValue: '',
    currentPage: 3,
}

export type InitStateType = typeof initState

export const paginationReduser = (state: InitStateType = initState, action: ActionType) => {
    switch (action.type) {
        case "PAGINATION/SEARCH-VALUE":
            return {...state, searchValue: action.value}
        case "PAGINATION/PAGE-SELECTION":
            return {...state, currentPage: action.page}

        default:
            return state
    }
}

export const searchAC = (value: string) => {
    return {type: 'PAGINATION/SEARCH-VALUE', value} as const
}

export const pageSelection = (page: number) => {
    return {type: 'PAGINATION/PAGE-SELECTION', page} as const
}


// export const pageSelectionTC = (page: number) => {
//     return (dispatch: any) => {
//         cardsAPI.getPage(page)
//             .then(res => {
//                 console.log(res.data.cardPacks)
//                 dispatch(setPacks(res.data.cardPacks))
//                 // dispatch(pageSelection(page))
//
//             })
//
//     }
// }


type ActionType = ReturnType<typeof searchAC> |
    ReturnType<typeof pageSelection>
