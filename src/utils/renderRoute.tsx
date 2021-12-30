import { ROUTE_MAP, RouteItem } from '../constants';
import _ from 'lodash';

export const renderRoute = (route: RouteItem) => {
  const Component = ROUTE_MAP[route.type];
  const routeProps = _.omit(route, 'type');
  return <Component key={route.path} {...routeProps} />;
};
