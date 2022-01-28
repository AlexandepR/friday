import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../bll/store";
import {searchAC} from "../../../bll/paginationFindReducer";

export const Find = () => {

    const searchValueCurrent = useSelector<RootStateType, string>(state => state.paginationFind.searchValue)

    const dispatch = useDispatch()

    const searchValue = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(searchAC(e.target.value))
    }

    return (
        <div>
            <span>Search</span>
            <input type="text" onChange={searchValue} value={searchValueCurrent}/>
        </div>
    )
}


