import React from 'react';

import ReactDOM from 'react-dom';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';

import AppRoutes from 'routes';

ReactDOM.render(
  <BrowserRouter>
    <AppRoutes />
  </BrowserRouter>,
  document.getElementById('root'),
);
