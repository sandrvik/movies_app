import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function PublicRoute({ component: Component, ...rest }) {

    const { isAuthenticated } = useSelector(({ auth }) => ({
        isAuthenticated: auth.isAuthenticated
    }))

    return (
        <Route
            {...rest}
            render={
                () => (
                    !isAuthenticated
                        ? (
                            <Component />
                        ) : (
                            <Redirect
                                to="/"
                            />
                        ))
            }
        />
    );
}

export default PublicRoute;