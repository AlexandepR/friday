import React, {useEffect} from "react";
import "./App.css";
import {Header} from "./ui/Header/Header";
import {Routes} from "./ui/Routes/Routes";
import {useDispatch} from "react-redux";
import {authMe} from "./ui/LogIn/LogInActions";
import styles from "./App.module.css";

export const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
            dispatch(authMe())
    }, [])

    return (
        <div className={styles.AppBlock}
        >
            <Header />
            <Routes />
        </div>
    );
};
