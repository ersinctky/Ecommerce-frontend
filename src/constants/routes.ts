import { RouteProps } from 'react-router-dom';
import React from 'react';

import { Home } from '../views/containers';
import { PrivateRoute, RestrictedRoute, PublicRoute } from '../views/common';

type RouteType = 'private' | 'restricted' | 'public';

export const ROUTE_MAP: Record<RouteType, React.FC<RouteProps>> = {
  private: PrivateRoute,
  restricted: RestrictedRoute,
  public: PublicRoute,
};

export interface RouteItem extends RouteProps {
  type: RouteType;
  path: string;
}

export const ROUTES: RouteItem[] = [
  {
    path: '/login',
    component: Home,
    type: 'private',
  },
  {
    path: '/',
    component: Home,
    type: 'public',
  },
];
