import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import store from './store/store';
import { Layout } from './modules/Layout/Layout';
import { privateRoutes, publicRoutes } from './routes';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import { ErrorsSection } from './components/ErrorsSection/ErrorsSection';

import './App.scss';
import { NotFoundPage } from './components/NotFoundPage/NotFound';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path={["/", "/search", "/movie/:id", "/favorites"]}>
            <Layout>
              <ErrorsSection />
              {privateRoutes.map(privateRouteProps => (
                <PrivateRoute {...privateRouteProps} />
              ))}
            </Layout>
          </Route>

          <Route exact path={["/signin", "/signup"]}>
            {publicRoutes.map(publicRouteProps => (
              <PublicRoute {...publicRouteProps} />
            ))}
          </Route>

          <Route path="*">
            <Switch>
              <Route component={NotFoundPage} />
            </Switch>
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;