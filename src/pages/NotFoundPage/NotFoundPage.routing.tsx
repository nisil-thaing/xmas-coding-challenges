import type { RouteObject } from 'react-router-dom';
import { Navigate } from 'react-router-dom';

import { NotFoundPage } from './NotFoundPage';

export const NOT_FOUND_PATH = '/not-found';

export const notFoundRouter: Array<RouteObject> = [
  {
    path: NOT_FOUND_PATH,
    element: <NotFoundPage />,
  },
  {
    path: '*',
    element: <Navigate to={NOT_FOUND_PATH} replace />,
  },
];
