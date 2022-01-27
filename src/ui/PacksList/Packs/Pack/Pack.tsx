import React from "react";
import s from "./Pack.module.css"

type PackType = {
    name: string
    cardsCount: number
    updated: string
    userName: string
}

export const Pack = (props: PackType) => {
    return (
            <tr>
                <td className={s.userName}>{props.name}</td>
                <td className={s.cardsCount}>{props.cardsCount}</td>
                <td className={s.updated}>{props.updated}</td>
                <td className={s.name}>{props.userName}</td>
            </tr>
    )
}