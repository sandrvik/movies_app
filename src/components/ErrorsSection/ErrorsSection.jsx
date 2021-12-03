import React from 'react';
import ReactDOM from 'react-dom';
import { useSelector } from 'react-redux';
import { ErrorMessage } from '../ErrorMessage/ErrorMessage';

export const ErrorsSection = () => {
    const errors = useSelector(({ errors: { errors } }) => errors)

    return ReactDOM.createPortal(
        <div style={{ position: 'absolute', top: '5%', right: '50%' }}>
            {errors.map((error, id) => {
                return <ErrorMessage key={id} title={error} id={id} />
            })}
        </div>
        , document.body);
}