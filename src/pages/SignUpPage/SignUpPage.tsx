import type { FC, FormEvent } from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export const SignUpPage: FC = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <div className="flex flex-1">
      <div className="flex flex-col justify-center w-full px-4 py-12 sm:px-6 lg:w-1/2 lg:px-20 xl:px-24">
        <div className="w-full max-w-sm mx-auto">
          <Link to="/" className="inline-flex items-center gap-2">
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-blue-600">
              <svg className="h-5 w-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
            </div>
            <span className="text-xl font-semibold text-slate-900">Xmas App</span>
          </Link>

          <h2 className="text-2xl font-semibold mt-8 text-slate-900">Get started for free</h2>
          <p className="text-sm mt-2 text-slate-600">
            Already registered?&nbsp;
            <Link to="/login" className="font-medium text-blue-600 hover:underline">
              Sign in
            </Link>
            &nbsp;to your account.
          </p>

          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6 mt-10">
            <div className="space-y-2">
              <Label htmlFor="firstName" className="text-sm font-medium text-slate-700">
                First name
              </Label>
              <Input
                id="firstName"
                type="text"
                autoComplete="given-name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                required
                className="h-11 border-slate-300 bg-white focus:border-blue-600 focus:ring-blue-600"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="lastName" className="text-sm font-medium text-slate-700">
                Last name
              </Label>
              <Input
                id="lastName"
                type="text"
                autoComplete="family-name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
                required
                className="h-11 border-slate-300 bg-white focus:border-blue-600 focus:ring-blue-600"
              />
            </div>

            <div className="col-span-2 space-y-2">
              <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className="h-11 border-slate-300 bg-white focus:border-blue-600 focus:ring-blue-600"
              />
            </div>

            <div className="col-span-2 space-y-2">
              <Label htmlFor="password" className="text-sm font-medium text-slate-700">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                autoComplete="new-password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className="h-11 border-slate-300 bg-white focus:border-blue-600 focus:ring-blue-600"
              />
            </div>

            <div className="col-span-2">
              <Button type="submit" className="text-base font-medium h-11 w-full bg-blue-600 hover:bg-blue-500">
                Sign up <span aria-hidden="true">&rarr;</span>
              </Button>
            </div>
          </form>
        </div>
      </div>

      <div className="relative hidden w-1/2 lg:block">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800" />
        <div className="absolute inset-0 bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1496917756835-20cb06e75b4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1908&q=80')] mix-blend-multiply" />
      </div>
    </div>
  );
};
