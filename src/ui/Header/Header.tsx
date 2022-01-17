import React from 'react';
import {NavLink, Redirect} from "react-router-dom";
import classes from "./Header.module.css";
import {Path} from "../Routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStoreType} from "../../bll/store";
import {logoutTC} from "../LogIn/LogInActions";

export const Header = () => {




    const isLoggedIn = useSelector<AppRootStoreType, boolean>(state => state.logIn.isLoggedIn)
    const dispatch = useDispatch()
    const logOut = () => {
        dispatch(logoutTC())
       return <Redirect to={'/login'}/>
    }

    return (
        <nav className={classes.nav}>
            { isLoggedIn ? '' : <div className={classes.item}>
                <NavLink to={Path.LogIn} activeClassName={classes.active}>
                Log in
                </NavLink>
                </div>
            }
             { isLoggedIn ? '' : <div className={classes.item}>
                <NavLink to={Path.Registration} activeClassName={classes.active}>
                    Registration
                </NavLink>
            </div>}
            { !isLoggedIn ? '' : <div className={classes.item}>
                <NavLink to={Path.Profile} activeClassName={classes.active}>
                    Profile
                </NavLink>
            </div>}
            { isLoggedIn ? '' : <div className={classes.item}>
                <NavLink to={Path.ResetPassword} activeClassName={classes.active}>
                    Reset password
                </NavLink>
            </div>}
            { !isLoggedIn ? '' : <div className={classes.item}>
                <NavLink to={Path.CreateNewPassword} activeClassName={classes.active}>
                    Create new password
                </NavLink>
            </div>
            }
            { !isLoggedIn ? '' : <div className={classes.item}>
                <NavLink to={Path.LogIn} onClick={logOut}  activeClassName={classes.active}>
                    LogOut
                </NavLink>
            </div>}
            <div className={classes.item}>
                <NavLink to={Path.ForgotPassword} activeClassName={classes.active}>
                    Forgot the Password
                </NavLink>
            </div>
        </nav>
    );
};