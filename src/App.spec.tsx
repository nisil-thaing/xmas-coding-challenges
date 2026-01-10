import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'bun:test';

import App from './App';

describe('App', () => {
  it('Should match snapshot', () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('Should render the logos', () => {
    render(<App />);
    expect(screen.getByRole('img', { name: 'Bun Logo' })).toBeInTheDocument();
  });
});
