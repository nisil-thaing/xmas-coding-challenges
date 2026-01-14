import { fireEvent, screen } from '@testing-library/react';
import { describe, expect, it } from 'bun:test';

import { renderTestWithAllProviders } from '@/lib/testing-library';

import { LoginPage } from './LoginPage';

describe('LoginPage', () => {
  it('should match snapshot', () => {
    const { container } = renderTestWithAllProviders(<LoginPage />);
    expect(container.innerHTML).toMatchSnapshot();
  });

  it('should render the logo and title', () => {
    renderTestWithAllProviders(<LoginPage />);

    expect(screen.getByText('Xmas App')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Sign in to your account' })).toBeInTheDocument();
  });

  it('should render sign up link', () => {
    renderTestWithAllProviders(<LoginPage />);

    expect(screen.getByRole('link', { name: 'Sign up' })).toHaveAttribute('href', '/register');
  });

  it('should render email and password inputs', () => {
    renderTestWithAllProviders(<LoginPage />);

    expect(screen.getByLabelText('Email address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('should render the sign in button', () => {
    renderTestWithAllProviders(<LoginPage />);

    expect(screen.getByRole('button', { name: /sign in/i })).toBeInTheDocument();
  });

  it('should update email input value', () => {
    renderTestWithAllProviders(<LoginPage />);

    const emailInput = screen.getByLabelText('Email address');
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    expect(emailInput).toHaveValue('test@example.com');
  });

  it('should update password input value', () => {
    renderTestWithAllProviders(<LoginPage />);

    const passwordInput = screen.getByLabelText('Password');
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    expect(passwordInput).toHaveValue('password123');
  });
});
