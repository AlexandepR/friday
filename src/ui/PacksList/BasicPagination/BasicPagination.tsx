import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useDispatch, useSelector} from "react-redux";
import {pageSelection} from "../../../bll/paginationReduser";
import {RootStateType} from "../../../bll/store";

export const BasicPagination = () => {

    const currentPage = useSelector<RootStateType, number>(state => state.pagination.currentPage)

    const dispatch = useDispatch()


    const selectPage = (e: React.ChangeEvent<unknown>, page: number) => {
        dispatch(pageSelection(page))

    }

    return (
        <Stack spacing={2}>
            <Pagination
                count={1000}
                onChange={selectPage}
                page={currentPage}
            />
        </Stack>
    );
}