import {Find} from "./Find/Find"
import s from "./PacksList.module.css"
import {RangeSlider} from "./Range/Range";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchPacksTC} from "../../bll/packsReducer";
import {RootStateType} from "../../bll/store";
import {Packs} from "./Packs/Packs";
import * as React from "react";
import {BasicPagination} from "./BasicPagination/BasicPagination";

export const PacksList = () => {

    const currentPage = useSelector<RootStateType, number>(state => state.paginationFind.currentPage)
    const searchValue = useSelector<RootStateType, string>(state => state.paginationFind.searchValue)
    const sortPacksName = useSelector<RootStateType, number>(state => state.paginationFind.sortPacksName)
    const sortPacksCards = useSelector<RootStateType, number>(state => state.paginationFind.sortPacksCards)
    const maxCardsCount = useSelector<RootStateType, number>(state => state.paginationFind.maxCardsCount)
    const minCardsCount = useSelector<RootStateType, number>(state => state.paginationFind.minCardsCount)


    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPacksTC(currentPage, searchValue, sortPacksName, sortPacksCards, maxCardsCount, minCardsCount))
    }, [currentPage, searchValue, sortPacksName, sortPacksCards, maxCardsCount, minCardsCount])


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
                    {/*<button onClick={searchHandler}>Search</button>*/}
                </div>
            </div>
            <div className={s.rightColumn}>
                <div>
                    <Find/>
                </div>
                <div>
                    <Packs/>
                </div>
                <div>
                    <BasicPagination/>
                </div>
            </div>
        </div>
    )
}