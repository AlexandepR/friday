import {registrationAPI} from "../api/registration-api";
import {Dispatch} from "redux";

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

export const createUserTC = (email: string, password: string) => {
    console.log('createUserTC')
    return (dispatch: any) => {
        registrationAPI.createUser(email, password)
            .then(res => {
                debugger
                // dispatch(registrationAC(email, password))
            })
            .catch(() => {
                console.log('catch')
            })
    }
}