import React, {useEffect} from 'react';
import {NavLink} from "react-router-dom";
import classes from "./Header.module.css";
import {Path} from "../Routes/Routes";
import {forgotAPI} from '../../api/api';

export const Header = () => {




    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to={Path.LogIn} activeClassName={classes.active}>
                    Log in
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={Path.Registration} activeClassName={classes.active}>
                    Registration
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={Path.Profile} activeClassName={classes.active}>
                    Profile
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={Path.ResetPassword} activeClassName={classes.active}>
                    Reset password
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={Path.CreateNewPassword} activeClassName={classes.active}>
                    Create new password
                </NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to={Path.ForgotPassword} activeClassName={classes.active}>
                    Forgot the Password
                </NavLink>
            </div>
        </nav>
    );
};