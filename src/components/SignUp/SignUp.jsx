import React from 'react';
import { Link } from 'react-router-dom';

export const SignUp = () => {
    return (
        <div style={{ backgroundColor: 'black', color: 'white', width: '100%', height: '100%' }}>
            <h2>Sign Up</h2>
            <Link to="/signin">Signin</Link>
        </div>
    )
}