import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, it } from 'bun:test';

import { renderTestWithRoutersWrapper } from '@/utils/testing-library';

import { LoginPage } from './LoginPage';

describe('LoginPage', () => {
  it('should match snapshot', () => {
    const { container } = renderTestWithRoutersWrapper(<LoginPage />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('should render the logo and title', () => {
    renderTestWithRoutersWrapper(<LoginPage />);

    expect(screen.getByText('Xmas App')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Sign in to your account' })).toBeInTheDocument();
  });

  it('should render sign up link', () => {
    renderTestWithRoutersWrapper(<LoginPage />);

    expect(screen.getByRole('link', { name: 'Sign up' })).toHaveAttribute('href', '/register');
  });

  it('should render email and password inputs', () => {
    renderTestWithRoutersWrapper(<LoginPage />);

    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('should render the sign in button', () => {
    renderTestWithRoutersWrapper(<LoginPage />);

    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });

  it('should update email input value', () => {
    renderTestWithRoutersWrapper(<LoginPage />);

    const emailInput = screen.getByLabelText('Email address');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput).toHaveValue('test@example.com');
  });

  it('should update password input value', () => {
    renderTestWithRoutersWrapper(<LoginPage />);

    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(passwordInput).toHaveValue('password123');
  });
});
