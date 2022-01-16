import React from "react";
import {initState} from "../../bll/logInReducer";
import {fetchLogErrorAC, setInitializedAC, setIsLoginInAC, setProfileAC} from "./LogInActions";

export type InitStateType = typeof initState


export type LoginResponseType = {
    _id: number
    email: string
    name: string
    avatar?: string
    publicCardPacksCount: number
    created: string
    updated: string
    isAdmin: boolean
    verified: boolean
    rememberMe: boolean
    error?: string
}

export type LoginType = {
    email: string,
    password: string,
    rememberMe: boolean
}


export type ActionType = ReturnType<typeof setIsLoginInAC> |
    ReturnType<typeof setInitializedAC> |
    ReturnType<typeof setProfileAC> | ReturnType<typeof fetchLogErrorAC>