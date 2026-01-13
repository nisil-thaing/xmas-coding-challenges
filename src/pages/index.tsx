import { createBrowserRouter } from 'react-router-dom';

import { RootLayout } from '@/components/RootLayout';

import { dashboardRouter } from './DashboardPage';
import { loginRouter } from './LoginPage';
import { notFoundRouter } from './NotFoundPage';
import { signUpRouter } from './SignUpPage';

export const routerConfigs = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [dashboardRouter, loginRouter, signUpRouter, ...notFoundRouter],
  },
]);
