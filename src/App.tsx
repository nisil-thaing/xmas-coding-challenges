import type { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { routerConfigs } from '@/pages';

import './index.css';

export const App: FC = () => {
  return <RouterProvider router={routerConfigs} />;
};

export default App;
