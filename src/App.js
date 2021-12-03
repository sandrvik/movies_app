import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import store from './store/store';
import { Layout } from './pages/Layout/Layout';
import { privateRoutes, publicRoutes } from './routes';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';
import { ErrorsSection } from './components/ErrorsSection/ErrorsSection';

import './App.scss';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path={["/", "/search", "/movie/:id"]}>
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

          {/* <Route path="*">
            <LayoutAnonymous>
              <Switch>
                <Route component={PageNotFound} />
              </Switch>
            </LayoutAnonymous>
          </Route> */}
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;