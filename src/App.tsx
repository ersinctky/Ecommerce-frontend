import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import { ROUTES } from './constants';
import { renderRoute } from './utils';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>{ROUTES.map((route) => renderRoute(route))}</Switch>
    </BrowserRouter>
  );
};
