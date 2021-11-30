import React from 'react';
import { Link } from 'react-router-dom';

export const SignIn = () => {
    return (
        <div style={{ backgroundColor: 'black', color: 'white', width: '100%', height: '100%' }}>
            <h2>Sign In</h2>
            <Link to="/signup">Signup</Link>
        </div>
    )
}