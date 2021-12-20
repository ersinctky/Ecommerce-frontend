import { RouteProps, Route } from "react-router-dom";
import React, { Fragment } from "react";

import { Home } from "../views/containers";
import { PrivateRoute, RestrictedRoute } from "../views/common";

type RouteType = "private" | "restricted" | "public";

export const ROUTE_MAP: Record<RouteType, React.FC> = {
  private: PrivateRoute,
  restricted: RestrictedRoute,
  public: Fragment,
};

interface RouteItem extends RouteProps {
  type: RouteType;
  path: string;
}

export const ROUTES: RouteItem[] = [
  {
    path: "/login",
    element: Home,
    type: "private",
  },
  {
    path: "/",
    element: Home,
    type: "public",
  },
];
