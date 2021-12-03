import { Alert } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteError } from '../../store/actions/errorsActions'

export const ErrorMessage = ({ title, id }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => dispatch(deleteError(id)), 4000)
    }, [dispatch, id])

    return (
        <Alert variant="filled" severity="error">{title}</Alert>
    )
}