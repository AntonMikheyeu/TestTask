import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RunnerApp from './RunnerApp';
import * as serviceWorker from './serviceWorker';
import { proxy } from '../package.json';
window.proxy = proxy;

ReactDOM.render(
  <React.StrictMode>
    <RunnerApp />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
