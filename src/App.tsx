import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home, ProductDetail } from "./views/containers";
import { PrivateRoute, RestrictedRoute } from "./views/common";
import { ROUTES, ROUTE_MAP } from "./constants";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        {ROUTES.map((route) => {
          const Component = ROUTE_MAP[route.type];
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<Component>{route.children}</Component>}
            />
          );
          return <Component key={route.path} {...route} />;
        })}
      </Routes>
    </BrowserRouter>
  );
};
