import { screen } from '@testing-library/react';
import { describe, expect, it } from 'bun:test';

import { renderTestWithRoutersWrapper } from '@/utils/testing-library';

import { MainHeader } from './MainHeader';

describe('MainHeader', () => {
  it('Should render the header with logo and navigation', () => {
    renderTestWithRoutersWrapper(<MainHeader />);

    expect(screen.getByRole('banner')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText('Xmas App')).toBeInTheDocument();
  });

  it('Should render navigation links', () => {
    renderTestWithRoutersWrapper(<MainHeader />);

    expect(screen.getByRole('link', { name: 'Features' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Testimonials' })).toHaveAttribute('href', '/#testimonials');
    expect(screen.getByRole('link', { name: 'Pricing' })).toHaveAttribute('href', '/#pricing');
  });

  it('Should render sign in and get started buttons', () => {
    renderTestWithRoutersWrapper(<MainHeader />);

    expect(screen.getByRole('link', { name: 'Sign in' })).toHaveAttribute('href', '/login');
    expect(screen.getByRole('link', { name: 'Get started' })).toHaveAttribute('href', '/register');
  });
});
