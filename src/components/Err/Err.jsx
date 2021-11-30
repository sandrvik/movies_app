import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { deleteError } from '../../store/actions/errorsActions'

export const Err = ({ title, id }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => dispatch(deleteError(id)), 4000)
    }, [dispatch, id])

    return (
        <span>{title}</span>
    )
}