import React from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Header from '../header';
import LoginPage from '../login-page';
import JogsPage from '../jogs-page';
import NotFound from '../not-found-page';
import InfoPage from '../info-page';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/login">
            <LoginPage />
        </Route>
        <Route exact path="/jogs">
            <JogsPage />
        </Route>
        <Route exact path="/info">
            <InfoPage />
        </Route>
        <Route exact path="/404">
            <NotFound />
        </Route>
        <Redirect to="/404" />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
