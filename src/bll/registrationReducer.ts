import {registrationAPI} from "../api/registration-api";
import {Dispatch} from "redux";
import {LogIn} from "../ui/LogIn/LogIn";
import { createBrowserHistory } from "history";

// const customHistory = createBrowserHistory();

type InitStateType = typeof initState;

const initState = {
    regSuccessful: false
};

export const registrationReducer = (
    state = initState,
    action: any
): InitStateType => {
    switch (action.type) {
        case "SET-ERROR":
            return {...state, regSuccessful: action.regSuccesful}
        default:
            return state;
    }
};


// export const registrationAC = (email: string, password: string) => {
//     return {type: "CREATE-USER"}
// }


// export const loggedInAC = (loggedIn: boolean) => {
//     return {type: ""}
// }

export const setSuccesfulAC = (regSuccesful: boolean) => {
    return {type: 'SET-ERROR', regSuccesful}
}

export const createUserTC = (email: string, password: string) => {
    console.log('createUserTC')
    return (dispatch: any) => {
        registrationAPI.createUser(email, password)
            .then(res => {
                debugger
                if (res.status === 201) {
                    alert(res.statusText)
                    dispatch(setSuccesfulAC(true))
                    // return customHistory.push('/login')
                }
            })
            .catch((err) => {
                debugger
                alert(err.message)
            })
    }
}

