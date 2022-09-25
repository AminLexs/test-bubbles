import React from 'react';

import { Route, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage/HomePage';
import Main from 'pages/Main/Main';

import { AppRoutes } from './routes.enums';

export default () => {
  return (
    <Main>
      <Routes>
        <Route path={AppRoutes.Home} element={<HomePage />} />
      </Routes>
    </Main>
  );
};
