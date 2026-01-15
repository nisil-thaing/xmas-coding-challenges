import type { FC } from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';

import { useSignUp } from '@/hooks/useAuthServices';
import { ArrowRight, Layers } from 'lucide-react';
import { z } from 'zod';

import { GENERAL_REGEX } from '@/constants/validation';

import { Form } from '@/components/Form';
import type { FormRef } from '@/components/Form';
import { Button } from '@/components/ui/button';

import { VALIDATION_MESSAGES } from './SignUpPage.constants';

const signUpSchema = z.object({
  firstName: z.string().min(1, VALIDATION_MESSAGES.firstName.required),
  lastName: z.string().min(1, VALIDATION_MESSAGES.lastName.required),
  email: z
    .string()
    .min(1, VALIDATION_MESSAGES.email.required)
    .regex(GENERAL_REGEX.EMAIL, VALIDATION_MESSAGES.email.invalid),
  password: z
    .string()
    .min(1, VALIDATION_MESSAGES.password.required)
    .regex(GENERAL_REGEX.USER_PASSWORD, VALIDATION_MESSAGES.password.invalid),
});

type SignUpFormData = z.infer<typeof signUpSchema>;

const DEFAULT_FORM_VALUES: SignUpFormData = { firstName: '', lastName: '', email: '', password: '' };

export const SignUpPage: FC = () => {
  const formRef = useRef<FormRef<SignUpFormData>>(null);
  const { signUp, isLoading, error } = useSignUp();

  const handleSubmit = async (data: SignUpFormData) => {
    try {
      await signUp(data);
    } catch {
      formRef.current?.reset({ ...data, password: '' });
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

          <h2 className="mt-8 text-2xl font-semibold text-slate-900">Get started for free</h2>
          <p className="mt-2 text-sm text-slate-600">
            Already registered?&nbsp;
            <Link to="/login" className="font-medium text-blue-600 hover:underline">
              Sign in
            </Link>
            &nbsp;to your account.
          </p>

          {error && <div className="mt-4 rounded-md bg-red-50 p-3 text-sm text-red-600">{error.message}</div>}

          <Form<SignUpFormData>
            ref={formRef}
            schema={signUpSchema}
            defaultValues={DEFAULT_FORM_VALUES}
            onSubmit={handleSubmit}
            className="mt-10 grid grid-cols-2 gap-6"
          >
            <Form.Input<SignUpFormData>
              name="firstName"
              label="First name"
              type="text"
              autoComplete="given-name"
              className="[&_input]:h-11 [&_input]:border-slate-300 [&_input]:bg-white [&_input]:focus:border-blue-600 [&_input]:focus:ring-blue-600"
            />

            <Form.Input<SignUpFormData>
              name="lastName"
              label="Last name"
              type="text"
              autoComplete="family-name"
              className="[&_input]:h-11 [&_input]:border-slate-300 [&_input]:bg-white [&_input]:focus:border-blue-600 [&_input]:focus:ring-blue-600"
            />

            <Form.Input<SignUpFormData>
              name="email"
              label="Email address"
              type="email"
              autoComplete="email"
              className="col-span-2 [&_input]:h-11 [&_input]:border-slate-300 [&_input]:bg-white [&_input]:focus:border-blue-600 [&_input]:focus:ring-blue-600"
            />

            <Form.Input<SignUpFormData>
              name="password"
              label="Password"
              type="password"
              autoComplete="new-password"
              className="col-span-2 [&_input]:h-11 [&_input]:border-slate-300 [&_input]:bg-white [&_input]:focus:border-blue-600 [&_input]:focus:ring-blue-600"
            />

            <div className="col-span-2">
              <Button
                type="submit"
                disabled={isLoading}
                className="h-11 w-full bg-blue-600 text-base font-medium hover:bg-blue-500"
              >
                {isLoading ? 'Signing up...' : 'Sign up'} <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
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
