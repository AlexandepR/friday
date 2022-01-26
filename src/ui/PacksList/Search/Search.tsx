import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../bll/store";

export const Search = () => {

    // const searchValueCurrently = useSelector<RootStateType, string>(state => state.search.searchValue)

    const dispatch = useDispatch()

    const searchValue = (e: ChangeEvent<HTMLInputElement>) => {
        // dispatch(searchAC(e.target.value))
    }

    return (
        <div>
            <span>Search</span>
            <input type="text" onChange={searchValue} value={"searchValueCurrently"}/>
        </div>
    )
}