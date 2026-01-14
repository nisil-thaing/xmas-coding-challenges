import { screen } from '@testing-library/react';
import { describe, expect, it } from 'bun:test';

import { renderTestWithRoutersWrapper } from '@/lib/testing-library';

import { DashboardPage } from './DashboardPage';

describe('DashboardPage', () => {
  it('should match snapshot', () => {
    const { container } = renderTestWithRoutersWrapper(<DashboardPage />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('should render the logos', () => {
    renderTestWithRoutersWrapper(<DashboardPage />);
    expect(screen.getByRole('img', { name: 'Bun Logo' })).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'React Logo' })).toBeInTheDocument();
  });

  it('should render the title', () => {
    renderTestWithRoutersWrapper(<DashboardPage />);
    expect(screen.getByText('Bun + React')).toBeInTheDocument();
  });

  it('should render the login link', () => {
    renderTestWithRoutersWrapper(<DashboardPage />);
    expect(screen.getByRole('link', { name: 'Go to Login' })).toBeInTheDocument();
  });
});
