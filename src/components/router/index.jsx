import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Route, Redirect, Switch } from 'react-router';
import Header from '../header';
import LoginPage from '../login-page';
import JogsPage from '../jogs-page';
import NotFound from '../not-found-page';
import InfoPage from '../info-page';
import AddJogPageForm from '../add-jog-form-page';

const history = createBrowserHistory();

const AppRouter = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route exact path="/">
            <Redirect to="/login" />
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
