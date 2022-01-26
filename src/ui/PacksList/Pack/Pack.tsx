import React from "react";
import s from "./Pack.module.css";

type PackType = {
    name: string
    cardsCount: number
    updated: string
    userName: string
}

export const Pack = (props: PackType) => {
    return (
        <ul className={s.wrapper}>
            <li className={s.name}>{props.name}</li>
            <li className={s.cardsCount}>{props.cardsCount}</li>
            <li className={s.updated}>{props.updated}</li>
            <li className={s.userName}>{props.userName}</li>
        </ul>
    )
}