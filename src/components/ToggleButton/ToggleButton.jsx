import React from 'react';

import './ToggleButton.scss';

export const ToggleButton = (props) => {
    const style = {
        backgroundColor: props.isActive ? '#ffcc00' : 'white',
        color: 'black'
    }

    return (
        <span style={style} className="toggle-button" name={props.name} onClick={props.onClick}>{props.name}</span>
    )
}