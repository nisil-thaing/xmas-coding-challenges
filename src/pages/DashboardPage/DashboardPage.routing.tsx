import type { RouteObject } from 'react-router-dom';

import { DashboardPage } from './DashboardPage';

export const DASHBOARD_PATH = '/';

export const dashboardRouter: RouteObject = {
  path: DASHBOARD_PATH,
  element: <DashboardPage />,
};
