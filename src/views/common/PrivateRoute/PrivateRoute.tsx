import React from 'react';
import { RouteProps, Route, Redirect, useLocation } from 'react-router-dom';

export const PrivateRoute: React.FC<RouteProps> = (props) => {
  const location = useLocation();
  const isAuth = true;

  return isAuth ? <Route {...props} /> : <Redirect to={`/login?redirect=${location.pathname}${location.search}`} />;
};
