import React from 'react';
import AppRouter from './components/router';
import { AppContext, AppInitialData } from './context';

const RunnerApp = () => {
  return (
    <div className="RunnerApp">
      <AppContext.Provider value={AppInitialData}>
        <AppRouter />
      </AppContext.Provider>
    </div>
  );
}

export default RunnerApp;
