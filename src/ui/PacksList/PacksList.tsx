import {Find} from "./Find/Find"
import s from "./PacksList.module.css"
import {RangeSlider} from "./Range/Range";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPacksTC} from "../../bll/packsReducer";
import {RootStateType} from "../../bll/store";
import {Pack} from "./Pack/Pack";
import * as React from "react";
import {BasicPagination} from "./BasicPagination/BasicPagination";

export const PacksList = () => {

    const cardPacks = useSelector<RootStateType, Array<any>>(state => state.cards.cardPacks)
    const currentPage = useSelector<RootStateType, number>(state => state.paginationFind.currentPage)
    const searchValue = useSelector<RootStateType, string>(state => state.paginationFind.searchValue)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPacksTC(currentPage, searchValue))
    }, [currentPage, searchValue])

    return (
        <div className={s.wrapper}>
            <div className={s.leftColumn}>
                <span>Show packs cards</span>
                <div>
                    <button>My</button>
                    <button>All</button>
                </div>
                <div>Number of cards</div>
                <div>
                    <RangeSlider/>
                </div>
                <div>
                    <button>Search</button>
                </div>
            </div>
            <div className={s.rightColumn}>
                {/*<span>Packs list</span>*/}
                <div>
                    <Find/>
                </div>
                <div>
                    {cardPacks.map(m => <Pack
                        name={m.name}
                        cardsCount={m.cardsCount}
                        updated={m.updated}
                        userName={m.user_name}
                    />)}
                </div>
                <div>
                    <BasicPagination/>
                </div>
            </div>
        </div>
    )
}