import React from "react";
import "./App.css";
import {Provider} from "react-redux";
import {HashRouter} from "react-router-dom";
import {Header} from "./ui/Header/Header";
import {store} from "./bll/store";
import {Routes} from "./ui/Routes/Routes";

export const App = () => {
    return (
        <div className="App">
            <HashRouter>
                <Provider store={store}>
                    <Header/>
                    <Routes/>
                </Provider>
            </HashRouter>
        </div>
    );
};
