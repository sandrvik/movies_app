import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setDateFrom, setDateTo } from '../../store/actions/filmsActions';

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { FormControl, TextField } from '@mui/material';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { styled } from '@mui/system';

const CustomFormControl = styled(FormControl)`
width: 250px;
color: white;
margin-bottom: 20px;
& .MuiTextField-root {
    margin: 0.5rem 0;
    font-family: Montserrat;
}
& .MuiOutlinedInput-root {
    &:hover .MuiOutlinedInput-notchedOutline {
        border: 1px solid #ffcc00;
    }
    &.Mui-focused .MuiOutlinedInput-notchedOutline {
        border: 3px solid #ffcc00;
    }
}
& .MuiOutlinedInput-input {
    font-family: Montserrat;
}
& .MuiOutlinedInput-notchedOutline {
    border: 1px solid #ffffffa6;
}
& .MuiInputLabel-root {
    font-family: Montserrat;
    color: #ffffffa6;
    &.Mui-focused {
        color: #ffffffa6;
    }
}
& .MuiOutlinedInput-input {
    color: white;
}
& .MuiButtonBase-root {
    color: #ffffffa6;
    &:hover {
        color: #ffcc00;
    }
}
`
export const DateFilter = () => {
    const dispatch = useDispatch()

    const { dateFrom, dateTo } = useSelector(({ films: { filters } }) => ({
        dateFrom: filters['release_date.gte'],
        dateTo: filters['release_date.lte']
    }))

    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <h3 style={{ width: '100%' }}>Release date</h3>
            <CustomFormControl variant="standard">
                <DatePicker
                    label="From"
                    value={dateFrom}
                    minDate={new Date('1900-01-01')}
                    maxDate={dateTo}
                    onChange={(value) => {
                        dispatch(setDateFrom(value));
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
                <DatePicker
                    label="To"
                    value={dateTo}
                    minDate={dateFrom}
                    maxDate={new Date('2040-12-31')}
                    onChange={(value) => {
                        dispatch(setDateTo(value));
                    }}
                    renderInput={(params) => <TextField {...params} />}
                />
            </CustomFormControl>
        </LocalizationProvider>
    )
}