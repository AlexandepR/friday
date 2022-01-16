import React from "react";
import {useSelector} from "react-redux";
import {AppRootStoreType} from "../../bll/store";
import {Redirect} from "react-router-dom";

export const CreateNewPassword = () => {
    const isLoggedIn = useSelector<AppRootStoreType, boolean>(state => state.logIn.isLoggedIn)
    if (!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }
    return <div>Create new password</div>;
};