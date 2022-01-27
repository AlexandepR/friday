const initState = {
    searchValue: '',
    currentPage: 1,
    cardPacksTotalCount: 1,

}

export type InitStateType = typeof initState

export const paginationFindReducer = (state: InitStateType = initState, action: ActionType) => {
    switch (action.type) {
        case "FIND-AND-PAGINATION/SET-PACKS-TOTAL-COUNT":
            return {...state, cardPacksTotalCount: action.cardPacksTotalCount}
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

export const setCardPacksTotalCount = (cardPacksTotalCount: number) => {
    return {type: 'FIND-AND-PAGINATION/SET-PACKS-TOTAL-COUNT', cardPacksTotalCount} as const
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
    ReturnType<typeof pageSelection> |
    ReturnType<typeof setCardPacksTotalCount>
