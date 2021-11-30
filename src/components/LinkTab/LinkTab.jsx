import React from 'react'
import { Link } from 'react-router-dom';
import { Tab } from '@mui/material';

export const LinkTab = (props) => {
    return (
        <Tab
            component={Link}
            {...props}
        />
    )
}