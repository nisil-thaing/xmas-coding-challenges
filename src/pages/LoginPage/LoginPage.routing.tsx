import type { RouteObject } from 'react-router-dom';

import { LoginPage } from './LoginPage';

export const LOGIN_PATH = '/login';

export const loginRouter: RouteObject = {
  path: LOGIN_PATH,
  element: <LoginPage />,
};
