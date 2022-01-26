import React from "react";
// import s from "./Pack.module.css";

type PackType = {
    name: string
    cardsCount: number
    updated: string
    userName: string
}

export const Pack = (props: PackType) => {
    return (
        <ul>
            <li>{props.name}</li>
            <li>{props.cardsCount}</li>
            <li>{props.updated}</li>
            <li>{props.userName}</li>
        </ul>
    )
}