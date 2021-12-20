import React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";

export const RestrictedRoute: React.FC<RouteProps> = (props) => {
  const isAuth = false;

  if (isAuth) {
    return <Navigate to="/" />;
  }

  return <Route {...props} />;
};
