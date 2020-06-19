import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from '../header';
import LoginPage from '../login-page';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Route exact path="/login">
          <LoginPage />
      </Route>
    </BrowserRouter>
  );
};

export default AppRouter;
