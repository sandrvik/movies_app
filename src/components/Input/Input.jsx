import React from 'react';

import './Input.scss';

export const Input = props => {
    return (
        <input
            {...props}
            onChange={props.onChange ? (e) => props.onChange(e) : null}
        />
    );
}