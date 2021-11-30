import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSort, changePage, getFilms } from '../../store/actions/filmsActions';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/system';

export default function BasicSelect() {
    const dispatch = useDispatch()

    const sort_by = useSelector(({ films: { filters: { sort_by } } }) => sort_by)

    const handleChange = (event) => {
        dispatch(setSort(event.target.value))
        dispatch(changePage(1))
        dispatch(getFilms())
    };

    const CustomFormControl = styled(FormControl)`
    width: 200px;
    padding: 0 15px;

    & .MuiInput-root {
        font-family: inherit;
    }

    & .MuiSvgIcon-root{
        color: yellow;
    }

    & .MuiInput-root::after {
        border: 1px solid yellow;
    }

    & .MuiSelect-select {
        color: white;
        font-weight: 500;
    }

    & .MuiMenu-list {
        background-color: yellow;
    }

    `
    const CustomMenuItem = styled(MenuItem)`
    & .Mui-selected {
        background-color: yellow;
    }
`;

    return (
        <>
            <h3 style={{ width: '100%' }}>Sort By</h3>
            <CustomFormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={sort_by}
                    label="Sort"
                    onChange={handleChange}
                >
                    <CustomMenuItem value={'popularity.desc'}>Popularity</CustomMenuItem>
                    <CustomMenuItem value={'vote_average.desc'}>Average Vote</CustomMenuItem>
                </Select>
            </CustomFormControl>
        </>
    );
}