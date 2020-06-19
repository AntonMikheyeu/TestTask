import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../header';
import LoginPage from '../login-page';
import JogsPage from '../jogs-page';
import NotFound from '../not-found-page';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/login">
          <LoginPage />
      </Route>
      <Route exact path="/jogs">
          <JogsPage />
      </Route>
      <Route>
          <NotFound />
      </Route>
    </BrowserRouter>
  );
};

export default AppRouter;
