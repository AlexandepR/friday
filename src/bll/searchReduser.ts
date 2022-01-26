const initState = {
    searchValue: ''
}

export type InitStateType = typeof initState

export const searchReduser = (state: InitStateType = initState, action: ActionType) => {
    switch (action.type) {
        case "PAGINATION/SEARCH-VALUE":
            return {...state, searchValue: action.value}


        default:
            return state
    }
}

export const searchAC = (value: string) => {
    return {type: 'PAGINATION/SEARCH-VALUE', value} as const
}

type ActionType = ReturnType<typeof searchAC>
