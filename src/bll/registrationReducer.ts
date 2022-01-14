import {registrationAPI} from "../api/registration-api";

type InitStateType = typeof initState;

const initState = {
    regSuccessful: false,
    isLoading: false,
    disable: false
};

export const registrationReducer = (
    state = initState,
    action: any
): InitStateType => {
    switch (action.type) {
        case "SET-DISABLED":
            return {...state, disable: action.isDisabled}
        case "SET-LOADING":
            return {...state, isLoading: action.isLoading}
        case "SET-ERROR":
            return {...state, regSuccessful: action.regSuccesful}
        default:
            return state;
    }
};

export const setStatusAC = (isLoading: boolean) => {
    return {type: 'SET-LOADING', isLoading}
}

export const setSuccesfulAC = (regSuccesful: boolean) => {
    return {type: 'SET-ERROR', regSuccesful}
}

export const setDisabledAC = (isDisabled: boolean) => {
    return {type: 'SET-DISABLED', isDisabled}
}

export const createUserTC = (email: string, password: string) => {
    console.log('createUserTC')
    return (dispatch: any) => {
        dispatch(setDisabledAC(true))
        dispatch(setStatusAC(true))
        registrationAPI.createUser(email, password)
            .then(res => {
                if (res.status === 201) {
                    alert(res.statusText)
                    dispatch(setSuccesfulAC(true))
                }
            })
            .catch((err) => {
                alert(err.response.data.error)
            })
            .finally(() => {
                dispatch(setStatusAC(false))
                dispatch(setDisabledAC(false))
            })
    }
}

