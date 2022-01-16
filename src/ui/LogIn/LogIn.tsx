import React, {useEffect} from "react";
import {Registration} from "../Registration/Registration";
import {Redirect, Route} from "react-router-dom";
import {Path} from "../Routes/Routes";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStoreType} from "../../bll/store";
import {useFormik} from "formik";
import styles from "./LogIn.module.css";
import {loginTC} from "./LogInActions";


export const LogIn = () => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector<AppRootStoreType, boolean>(state => state.logIn.isLoggedIn)
    const error = useSelector<AppRootStoreType, string>(state => state.logIn.error)

    // useEffect(() => {
    //     if (error) {
    //         dispatch(fetchLogErrorAC(error))
    //     }
    // }, [error])
    // useEffect(() => {
    //     if (isLoggedIn) {
    //        <Redirect to={'/profile'}/>
    //     }
    // }, [isLoggedIn])

    const formik = useFormik({
        validate: (values) => {
            if (!values.email) {
                return {
                    email: 'Email is required'
                }
            }
            if (!values.password) {
                return {
                    password: 'Password is required'
                }
            }
        },
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        onSubmit: values => {
            dispatch(loginTC(values))
            formik.resetForm()
        },
    });

    if (isLoggedIn) {
        return <Redirect to={'/profile'}/>
    }

    return (
        <div className={styles.blockMain}>
            <form onSubmit={(formik.handleSubmit)}>
                <div className={styles.title}>
                <h1 >It-incubator</h1>
                <h2 >Sign In</h2>
                </div>
                <div>{error === '' ? '' : <div className={styles.errorCorrectPasswordEmail}>{error}</div>}</div>
                <div className={styles.blockEmail}>
                    <label>Email</label>
                    <input
                        className={styles.input}
                        placeholder={'Email'}
                        {...formik.getFieldProps('email')}
                    />
                </div>
                <div className={styles.error}>
                    {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                </div>
                <div className={styles.blockPassword}>
                    <label>Password</label>
                    <input
                        className={styles.input}
                        type='password'
                        placeholder={'Password'}
                        {...formik.getFieldProps('password')}
                    />
                </div>
                    <div className={styles.error}>
                        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                    </div>

                <div className={styles.blockLower}>
                    <input
                        className={styles.checkbox}
                        type={"checkbox"}
                        checked={formik.values.rememberMe}
                        {...formik.getFieldProps('rememberMe')}
                    />
                    <label>Remember me</label>

                    <button
                        className={styles.button}
                    >Login
                    </button>
                    <div className={styles.below}>
                    <a href='#/resetPassword'>Forgot Password</a>
                    <span>Don't have an account?</span>
                    <a href='#/registration'>Sign Up</a>
                    <Route path={Path.Registration} render={() => <Registration/>}/>
                    </div>
                </div>

            </form>
        </div>)
};