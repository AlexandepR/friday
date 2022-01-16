import {ActionType, LoginResponseType, LoginType} from "./LogInTypes";
import {Dispatch} from "redux";
import {loginApi} from "./LogInAPI";


export const setIsLoginInAC = (value: boolean) =>
    ({type: 'APP/SET-LOGIN-IN', value} as const)
export const setInitializedAC = (isInitialized: boolean) =>
    ({type: 'APP/SET-INITIALIZED', isInitialized} as const)
export const setProfileAC = (profile: LoginResponseType) =>
    ({type: 'LOGIN/SET-USER-PROFILE', profile} as const)
export const fetchLogErrorAC = (error: string) => ({
    type: 'LOGIN/FETCH-LOG-ERROR', error} as const)

export const loginTC = (data: LoginType) => async (dispatch: Dispatch<ActionType>) => {
    try {
        const res = await loginApi.login(data)
        dispatch(setIsLoginInAC(true))
        dispatch(setInitializedAC(true))
        dispatch(setProfileAC(res.data))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message)
        dispatch(fetchLogErrorAC(error))
    }
}
// export const setIsMeTC = () => async (dispatch: Dispatch<ActionType>) => {
//     try {
//         const res = await loginApi.me()
//         dispatch(setProfileAC(res))
//     } catch (e: any) {
//         const error = e.response ? e.response.data.error : (e.message)
//         dispatch(fetchLogErrorAC(error))
//     }
// }
export const logoutTC = () => async (dispatch: Dispatch<ActionType>) => {
    try {
        await loginApi.logout()
        dispatch(setIsLoginInAC(false))
        dispatch(setInitializedAC(false))
    } catch (e: any) {
        const error = e.response ? e.response.data.error : (e.message)
        dispatch(fetchLogErrorAC(error))
    }
}

export const authMe = () => async(dispatch: Dispatch<ActionType>) => {
    try {

        const profile = await loginApi.me()
        dispatch(setIsLoginInAC(true))
        dispatch(setProfileAC(profile))
        dispatch(setInitializedAC(true))

    } catch (e: any) {
        if(e.response?.status === 401) {
            dispatch(setIsLoginInAC(false))
            dispatch(setInitializedAC(true))
        } else {
            const error = e.response ? e.response.data.error : (e.message)
            dispatch(fetchLogErrorAC(error))
        }
    }
}