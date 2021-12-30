import React from 'react';
import { RouteProps, Route, Redirect } from 'react-router-dom';

export const RestrictedRoute: React.FC<RouteProps> = (props) => {
  const isAuth = true;

  return isAuth ? <Redirect to='/' /> : <Route {...props} />;
};
