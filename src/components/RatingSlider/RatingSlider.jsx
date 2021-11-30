import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRating } from '../../store/actions/filmsActions';
import { Slider } from '@mui/material';

export const RatingSlider = () => {
    const dispatch = useDispatch();
    const rating = useSelector(({ films: { filters: { rating } } }) => rating)

    const changeHandler = (_, newValue) => {
        dispatch(setRating(newValue))
    }

    return (
        <>
            <h3>Rating</h3>
            <Slider
                value={rating}
                min={0}
                max={10}
                onChange={changeHandler}
                valueLabelDisplay="auto"
                sx={{ color: '#ffcc00' }}
            />
        </>
    )
}