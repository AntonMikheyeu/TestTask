import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Redirect, Switch } from 'react-router';
import Header from '../header';
import LoginPage from '../login-page';
import JogsPage from '../jogs-page';
import NotFound from '../not-found-page';
import InfoPage from '../info-page';
import AddJogPageForm from '../add-jog-form-page';
import { AppContext } from '../../context';
import getUserData from '../login-page/utility/get-user-data';

const history = createBrowserHistory();

const AppRouter = () => {
  const { user, setUser } = React.useContext(AppContext);
  const token = document.cookie.split('access_token=')[1];
  const [isPerformeRerendered, performRerender] = React.useState(false);

  const authRedirect = token || window.location.pathname === '/login'
    ? null : <Redirect to="/login" />;

  React.useEffect(
    () => {
      if (user.id || !token) return;

      try {
        getUserData(token, setUser);
      } catch (error) {
        console.error(error);
        document.cookie = '';
        performRerender(!isPerformeRerendered);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  return (
    <Router history={history}>
      <Header />
      {authRedirect}
      <Switch>
        <Route exact path="/">
            <Redirect to={token ? "/jogs" : "/login"} />
        </Route>
        <Route exact path="/login">
            <LoginPage />
        </Route>
        <Route exact path="/jogs">
            <JogsPage />
        </Route>
        <Route exact path="/jogs/add">
            <AddJogPageForm />
        </Route>
        <Route exact path="/info">
            <InfoPage />
        </Route>
        <Route exact path="/404">
            <NotFound />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
