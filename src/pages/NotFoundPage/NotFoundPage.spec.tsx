import { screen } from '@testing-library/react';
import { describe, expect, it } from 'bun:test';

import { renderTestWithRoutersWrapper } from '@/utils/testing-library';

import { NotFoundPage } from './NotFoundPage';

describe('NotFoundPage', () => {
  it('should match snapshot', () => {
    const { container } = renderTestWithRoutersWrapper(<NotFoundPage />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('should render 404 text', () => {
    renderTestWithRoutersWrapper(<NotFoundPage />);
    expect(screen.getByText('404')).toBeInTheDocument();
  });

  it('should render page not found description', () => {
    renderTestWithRoutersWrapper(<NotFoundPage />);
    expect(screen.getByText('Page Not Found')).toBeInTheDocument();
  });

  it('should render go to dashboard link', () => {
    renderTestWithRoutersWrapper(<NotFoundPage />);
    expect(screen.getByRole('link', { name: 'Go to Dashboard' })).toBeInTheDocument();
  });
});
