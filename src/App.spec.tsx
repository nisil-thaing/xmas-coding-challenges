import { createMemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it, mock } from 'bun:test';

import { RootLayout } from '@/components/RootLayout';

import App from './App';

mock.module('@/pages', () => ({
  routerConfigs: createMemoryRouter([
    {
      path: '/',
      element: <RootLayout />,
    },
  ]),
}));

describe('App', () => {
  it('Should render MainHeader and RootLayout', () => {
    render(<App />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
