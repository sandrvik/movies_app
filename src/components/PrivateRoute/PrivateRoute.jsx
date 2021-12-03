import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {

    const isAuthenticated = useSelector(({ auth: { isAuthenticated } }) => isAuthenticated)

    // const isAuthenticated = true


    return (
        <Route
            {...rest}
            render={
                () => (
                    isAuthenticated
                        ? (
                            <Component />
                        ) : (
                            <Redirect
                                to="/signin"
                            />
                        ))
            }
        />
    );
}

export default PrivateRoute;