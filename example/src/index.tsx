import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { SnackbarProvider } from 'notistack';

ReactDOM.render(
  <SnackbarProvider maxSnack={1}>
    <App />
  </SnackbarProvider>,
  document.getElementById('root')
);
