import React, { useState } from 'react';
import { styled } from '@mui/system';

export const Form = (props) => {

    const { children, ...other } = props;
    return (
        <form autoComplete="off" {...other}>
            {props.children}
        </form>
    )
}

export const StyledForm = styled(Form)`
        max-width: 40rem;
        padding: 10px;
        margin: 40px auto;
        // border: 1px solid white;
        & .MuiOutlinedInput-root {
            &:hover .MuiOutlinedInput-notchedOutline {
                border: 1px solid yellow;
            }
            &.Mui-focused .MuiOutlinedInput-notchedOutline {
                border: 3px solid yellow;
            }
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
        & .MuiButton-root {
            background-color: transparent;
            font-family: Montserrat;
            border-radius: 20px;
            border: 2px solid yellow;
            margin: 2px auto;
            &:hover {
                background-color: transparent;
                transform: scale(105%)
            }
        }
    `


export function useForm(initialFValues, validateOnChange = false, validate) {


    const [values, setValues] = useState(initialFValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = e => {
        const { name, value } = e.target
        if (value === ' ') return;
        setValues({
            ...values,
            [name]: value
        })
        if (validateOnChange)
            validate({ [name]: value })
    }

    const resetForm = () => {
        setValues(initialFValues);
        setErrors({})
    }


    return {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange,
        resetForm

    }
}