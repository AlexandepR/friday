import React, {useState} from "react"
import s from "./Registration.module.css"
import {useDispatch} from "react-redux";
import {createUserTC} from "../../bll/registrationReducer";

export const Registration = () => {

    console.log('component Registration render')

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()

    const handleSubmit = () => {
        // e.preventDefault();
        // console.log(email, password)
        console.log('wadw')
        dispatch(createUserTC(email, password))
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

