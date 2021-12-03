import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDateFrom, setDateTo } from '../../store/actions/filmsActions';
import { FormControl, TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { styled } from '@mui/system';

const CustomFormControl = styled(FormControl)`
width: 250px;
color: white;
margin-bottom: 20px;

& .MuiInputBase-root {
    font-family: inherit;
    color: white;
    font-weight: 600;
    border: 1px solid white;
    margin-bottom: 10px;
}

& .MuiSvgIcon-root{
    color: #ffcc00;
}

& .MuiInput-root::after {
    border: 1px solid #ffcc00;
}

& .MuiInputLabel-root {
    color: white;
    font-weight: 700;
    font-family: inherit;
}
`
export const DateFilter = () => {
    const dispatch = useDispatch()

    const dateFrom = useSelector(({ films: { filters } }) => filters['release_date.gte'])
    const dateTo = useSelector(({ films: { filters } }) => filters['release_date.lte'])

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