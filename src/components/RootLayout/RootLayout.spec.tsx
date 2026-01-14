import { screen } from '@testing-library/react';
import { describe, expect, it } from 'bun:test';

import { renderTestWithRoutersWrapper } from '@/lib/testing-library';

import { RootLayout } from './RootLayout';

describe('RootLayout', () => {
  it('Should render MainHeader and Outlet container', () => {
    renderTestWithRoutersWrapper(<RootLayout />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('main')).toBeInTheDocument();
  });
});
