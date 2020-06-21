import React from 'react';
import JogsPage from './';
import { AppContext, AppInitialData } from '../../context';
import { createBrowserHistory } from 'history';
import { Router } from 'react-router';
import renderer from 'react-test-renderer';

describe('Jogs page component', () => {
  const page = renderer.create(
    <AppContext.Provider value={AppInitialData}>
      <Router history={createBrowserHistory()}>
          <JogsPage />
      </Router>
    </AppContext.Provider>
  );
  const jsonOfPage = page.toJSON();

  it ('should render page with correct classname', () => {
    expect(jsonOfPage.props.className).toEqual('page jogs');
  })

  it ('should render icon of add jog button', () => {
    expect(jsonOfPage.children[0].type).toEqual('img');
  })

  it ('should render icon of add jog button with correct classname', () => {
    expect(jsonOfPage.children[0].props.className).toEqual('jogs__add');
  })

  it ('should render toggler of filter', () => {
    expect(jsonOfPage.children[1].props.className).toEqual('jogs__toggle-filter');
  })
});
