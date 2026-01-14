import type { FC } from 'react';
import { RouterProvider } from 'react-router-dom';

import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '@/lib/react-query';

import { routerConfigs } from '@/pages';

import './index.css';

export const App: FC = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routerConfigs} />
    </QueryClientProvider>
  );
};

export default App;
