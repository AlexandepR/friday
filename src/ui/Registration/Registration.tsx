import React, {useState} from "react"
import s from "./Registration.module.css"
import {useDispatch, useSelector} from "react-redux";
import {createUserTC, setSuccesfulAC} from "../../bll/registrationReducer";
import { useHistory } from "react-router-dom";
import {RootStateType} from "../../bll/store";

export const Registration = () => {

    console.log('component Registration render')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const regSuccessful = useSelector<RootStateType, boolean>(state => state.registration.regSuccessful)

    const dispatch = useDispatch()

    const history = useHistory();

    const handleSubmit = () => {
        // e.preventDefault();

        dispatch(createUserTC(email, password))
    }

    if (regSuccessful) {
        history.push("/login");
        dispatch(setSuccesfulAC(false))
    }

    return (
        <div className={s.wrapper}>
            <form onSubmit={handleSubmit}>
                <div>
                    <label className={s.label}>Email</label>
                    <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label>Password</label>
                    <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <button>Registration{handleSubmit}</button>
            </form>
        </div>
    )
}

