import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../bll/store";
import {Pack} from "./Pack/Pack";
import {sortPacksAC} from "../../../bll/paginationFindReducer";

export const Packs = () => {

    const cardPacks = useSelector<RootStateType, Array<any>>(state => state.cards.cardPacks)

    const dispatch = useDispatch()

    const sortPacksHandlerUpName = () => {
        dispatch(sortPacksAC(1))
    }

    const sortPacksHandlerDownName = () => {
        dispatch(sortPacksAC(0))
    }

    const sortPacksHandlerUpCards = () => {

    }

    const sortPacksHandlerDownCards = () => {

    }

    return (
        <div>
            <table>
                <tr>
                    <th>Name
                        <button onClick={sortPacksHandlerUpName}>↑</button>
                        <button onClick={sortPacksHandlerDownName}>↓</button>
                    </th>
                    <th>Cards
                        <button onClick={sortPacksHandlerUpCards}>↑</button>
                        <button onClick={sortPacksHandlerDownCards}>↓</button>
                    </th>
                    <th>Last Update</th>
                    <th>Created by</th>
                </tr>
                {cardPacks.map(m => (<Pack
                    name={m.name}
                    cardsCount={m.cardsCount}
                    updated={m.updated}
                    userName={m.user_name}
                />))}
            </table>
        </div>
    )
}

