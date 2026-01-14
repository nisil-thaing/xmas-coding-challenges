import type { FC } from 'react';
import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Layers } from 'lucide-react';
import { z } from 'zod';

import { GENERAL_REGEX } from '@/constants/validation';

import { authService } from '@/services/authService';

import { Form } from '@/components/Form';
import type { FormRef } from '@/components/Form';
import { Button } from '@/components/ui/button';

import { VALIDATION_MESSAGES } from './LoginPage.constants';

const loginSchema = z.object({
  email: z
    .string()
    .min(1, VALIDATION_MESSAGES.email.required)
    .regex(GENERAL_REGEX.EMAIL, VALIDATION_MESSAGES.email.invalid),
  password: z
    .string()
    .min(1, VALIDATION_MESSAGES.password.required)
    .regex(GENERAL_REGEX.USER_PASSWORD, VALIDATION_MESSAGES.password.invalid),
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginPage: FC = () => {
  const navigate = useNavigate();
  const formRef = useRef<FormRef<LoginFormData>>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (data: LoginFormData) => {
    setError(null);
    setIsLoading(true);

    try {
      await authService.login(data);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      formRef.current?.reset({ email: data.email, password: '' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-1">
      <div className="flex w-full flex-col justify-center px-4 py-12 sm:px-6 lg:w-1/2 lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600">
              <Layers className="h-5 w-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-slate-900">Xmas App</span>
          </Link>

          <h2 className="mt-8 text-2xl font-semibold text-slate-900">Sign in to your account</h2>
          <p className="mt-2 text-sm text-slate-600">
            Don&apos;t have an account?&nbsp;
            <Link to="/register" className="font-medium text-blue-600 hover:underline">
              Sign up
            </Link>
            &nbsp;for a free trial.
          </p>

          {error && <div className="mt-4 rounded-md bg-red-50 p-3 text-sm text-red-600">{error}</div>}

          <Form<LoginFormData>
            ref={formRef}
            schema={loginSchema}
            defaultValues={{ email: '', password: '' }}
            onSubmit={handleSubmit}
            className="mt-10 space-y-6"
          >
            <Form.Input<LoginFormData>
              name="email"
              label="Email address"
              type="email"
              autoComplete="email"
              className="[&_input]:h-11 [&_input]:border-slate-300 [&_input]:bg-white [&_input]:focus:border-blue-600 [&_input]:focus:ring-blue-600"
            />

            <Form.Input<LoginFormData>
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              className="[&_input]:h-11 [&_input]:border-slate-300 [&_input]:bg-white [&_input]:focus:border-blue-600 [&_input]:focus:ring-blue-600"
            />

            <Button
              type="submit"
              disabled={isLoading}
              className="h-11 w-full bg-blue-600 text-base font-medium hover:bg-blue-500"
            >
              {isLoading ? 'Signing in...' : 'Sign in'} <span aria-hidden="true">&rarr;</span>
            </Button>
          </Form>
        </div>
      </div>

      <div className="relative hidden w-1/2 lg:block">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800" />
        <div className="absolute inset-0 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1908&q=80')] mix-blend-multiply" />
      </div>
    </div>
  );
};
