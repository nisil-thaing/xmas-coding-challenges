import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { MainHeader } from '@/components/MainHeader';

export const RootLayout: FC = () => {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <MainHeader />
      <main className="flex w-full flex-1 flex-col pt-16">
        <Outlet />
      </main>
    </div>
  );
};
