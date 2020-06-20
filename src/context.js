import React from 'react';

class AppData {
  constructor() {
    this.user = {};
    this.setUser = user => this.user = user;
    this.jogs = {
      isUpdated: false,
      value: []
    }
    this.setJogs = (jogs, isUpdated = false) => {
      this.jogs.value = jogs;
      this.jogs.isUpdated = isUpdated;
    };
    this.setIsUpdated = value => this.jogs.isUpdated = value;
    this.jog = {};
    this.setJog = jog => this.jog = jog;
  }
}

export const AppInitialData = new AppData();

export const AppContext = React.createContext({});
