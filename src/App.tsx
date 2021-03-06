import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";

import { ROUTES } from "./constants";
import { renderRoute } from "./utils";
import { Header } from "./views/common";

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>{ROUTES.map((route) => renderRoute(route))}</Switch>
    </BrowserRouter>
  );
};
