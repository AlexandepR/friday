import {registrationAPI} from "../api/registration-api";
import {Dispatch} from "redux";
import {LogIn} from "../ui/LogIn/LogIn";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

type InitStateType = typeof initState;

const initState = {};

export const registrationReducer = (
    state = initState,
    action: any
): InitStateType => {
    switch (action.type) {
        // case "CREATE-USER":
        //     return {...state, action.email, action.password}
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

export const createUserTC = (email: string, password: string) => {
    console.log('createUserTC')
    return (dispatch: any) => {
        registrationAPI.createUser(email, password)
            .then(res => {
                debugger
                if (res.status === 201) {
                    // alert('status 201')
                    alert(res.statusText)
                    return customHistory.push('/login')
                    // dispatch(loggedInAC(true))
                }
                // dispatch(registrationAC(email, password))
            })
            .catch((err) => {
                debugger
                alert(err.message)
                // console.log('catch')
            })
    }
}