import React from "react";
import { Route, Navigate, useLocation } from "react-router-dom";

export const PrivateRoute: React.FC = ({ children }) => {
  const location = useLocation();
  const isAuth = true;

  return isAuth ? (
    <>{children}</>
  ) : (
    <Navigate to={`/login?redirect=${location.pathname}${location.search}`} />
  );
};
