import React from "react";
import {Redirect} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppRootStoreType} from "../../bll/store";

export const Profile = () => {
    const isLoggedIn = useSelector<AppRootStoreType, boolean>(state => state.logIn.isLoggedIn)
    if (!isLoggedIn) {
        return <Redirect to={'/login'}/>
    }
    return <div>Profile</div>;
};