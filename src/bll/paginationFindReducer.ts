const initState = {
    searchValue: '',
    currentPage: 1,
    cardPacksTotalCount: 1,
    sortPacksName: -1,
    sortPacksCards: -1,
    maxCardsCount: 1000,
    minCardsCount: 0,
}

export type InitStateType = typeof initState

export const paginationFindReducer = (state: InitStateType = initState, action: ActionType) => {
    switch (action.type) {
        case "FIND-AND-PAGINATION/SET-MAX-MIN":
            return {...state, maxCardsCount: action.maxCardsCount, minCardsCount: action.minCardsCount}
        case "FIND-AND-PAGINATION/SORT-CARDS":
            return {...state, sortPacksCards: action.sortPacksCards}
        case "FIND-AND-PAGINATION/SORT":
            return {...state, sortPacksName: action.sortPacksName}
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

export const sortPacksAC = (sortPacksName: number) => {
    return {type: 'FIND-AND-PAGINATION/SORT', sortPacksName: sortPacksName} as const
}

export const sortPacksCardsAC = (sortPacksCards: number) => {
    return {type: 'FIND-AND-PAGINATION/SORT-CARDS', sortPacksCards} as const
}

export const setMaxMinCardsCount = (maxCardsCount: number, minCardsCount: number) => {
    return {type: 'FIND-AND-PAGINATION/SET-MAX-MIN', maxCardsCount, minCardsCount} as const
}

type ActionType = ReturnType<typeof searchAC> |
    ReturnType<typeof pageSelection> |
    ReturnType<typeof setCardPacksTotalCount> |
    ReturnType<typeof sortPacksAC> |
    ReturnType<typeof sortPacksCardsAC> |
    ReturnType<typeof setMaxMinCardsCount>
