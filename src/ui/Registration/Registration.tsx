import React, {useState} from "react"
import s from "./Registration.module.css"
import {useDispatch, useSelector} from "react-redux";
import {createUserTC, setSuccesfulAC} from "../../bll/registrationReducer";
import {useHistory} from "react-router-dom";
import {RootStateType} from "../../bll/store";
import preloader from "./../../asset/Settings.gif"

export const Registration = () => {

    console.log('component Registration render')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const regSuccessful = useSelector<RootStateType, boolean>(state => state.registration.regSuccessful)
    const setStatus = useSelector<RootStateType, boolean>(state => state.registration.isLoading)
    const disabled = useSelector<RootStateType, boolean>(state => state.registration.disable)

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

        <div>


            <div className={s.wrapper}>
                <form className={s.form} onSubmit={handleSubmit}>
                    <div>
                        <label className={s.label}>Email</label>
                        <input disabled={disabled} type='email' value={email}
                               onChange={(e) => setEmail(e.target.value)}/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input disabled={disabled} type='password' value={password}
                               onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button disabled={disabled}>Registration{handleSubmit}</button>
                </form>
            </div>
            {setStatus && <div className={s.preloader}><img src={preloader}/></div>}
        </div>
    )
}

