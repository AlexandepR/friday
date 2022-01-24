import {registrationAPI} from "../api/registration-api";
import {Dispatch} from "redux";

type InitStateType = typeof initState;

const initState = {
    regSuccessful: false,
    isLoading: false,
    disable: false,
    error: '',
};

export const registrationReducer = (
    state = initState,
    action: ActionType
): InitStateType => {
    switch (action.type) {
        case "REGISTRATION/SET-ERROR":
            return {...state, error: action.error}
        case "REGISTRATION/SET-DISABLED":
            return {...state, disable: action.isDisabled}
        case "REGISTRATION/SET-LOADING":
            return {...state, isLoading: action.isLoading}
        case "REGISTRATION/SET-SUCCESFUL":
            return {...state, regSuccessful: action.regSuccesful}
        default:
            return state;
    }
};

export const setLoadingAC = (isLoading: boolean) => {
    return {type: 'REGISTRATION/SET-LOADING', isLoading} as const
}

export const setSuccesfulAC = (regSuccesful: boolean) => {
    return {type: 'REGISTRATION/SET-SUCCESFUL', regSuccesful} as const
}

export const setDisabledAC = (isDisabled: boolean) => {
    return {type: 'REGISTRATION/SET-DISABLED', isDisabled} as const
}

export const setError = (error: string) => {
    return {type: 'REGISTRATION/SET-ERROR', error} as const
}

// export const setErrorTC = (error: string) => {
//     return (dispatch: any) => {
//
//     }
// }

export const createUserTC = (email: string, password: string) => {
    return (dispatch: Dispatch<ActionType>) => {
        dispatch(setDisabledAC(true))
        dispatch(setLoadingAC(true))
        registrationAPI.createUser(email, password)
            .then(res => {
                // debugger
                if (res.status === 201) {
                    alert(res.statusText)
                    dispatch(setSuccesfulAC(true))
                }
            })
            .catch((err) => {
                dispatch(setError(err.response.data.error))
            })
            .finally(() => {
                dispatch(setLoadingAC(false))
                dispatch(setDisabledAC(false))
            })
    }
}



type ActionType = ReturnType<typeof setLoadingAC> |
    ReturnType<typeof setSuccesfulAC> |
    ReturnType<typeof setDisabledAC> |
    ReturnType<typeof setError>

