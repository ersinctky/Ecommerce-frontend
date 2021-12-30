import React from 'react';
import { RouteProps, Route } from 'react-router-dom';

export const PublicRoute: React.FC<RouteProps> = (props) => <Route {...props} />;
