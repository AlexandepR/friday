import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../../bll/store";
import {setMaxMinCardsCount} from "../../../bll/paginationFindReducer";

function valuetext(value: number) {
    return `${value}°C`;
}

export const RangeSlider = () => {

    const maxCardsCount = useSelector<RootStateType, number>(state => state.paginationFind.maxCardsCount)
    const minCardsCount = useSelector<RootStateType, number>(state => state.paginationFind.minCardsCount)



    const [value, setValue] = React.useState<number[]>([minCardsCount, maxCardsCount]);

    const dispatch = useDispatch()

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
        // console.log(`min ${value[0]}`)
        // console.log(`max ${value[1]}`)
        // dispatch(setMaxMinCardsCount(value[1], value[0]))
    };

    const handleChangeCommitted = (event: React.SyntheticEvent | Event, value: any) => {
        console.log(value)
        dispatch(setMaxMinCardsCount(value[1], value[0]))
    }



    return (
        <Box sx={{ width: 190 }}>
            <Slider
                max={120}
                // min={0}
                getAriaLabel={() => 'Temperature range'}
                value={value}
                onChange={handleChange}
                onChangeCommitted={handleChangeCommitted}
                disableSwap={true}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
            />
        </Box>
    );
}