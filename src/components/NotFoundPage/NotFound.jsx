import React from 'react';
import { useHistory } from 'react-router';

import { OutlineButton } from '../Button/Button';

import './NotFound.scss'

export const NotFoundPage = () => {
    const history = useHistory()

    return (
        <div className="wrapper">
            <h2 className="title">Page not found</h2>
            <OutlineButton onClick={() => history.push('/')}>Go home</OutlineButton>
        </div>
    )
}