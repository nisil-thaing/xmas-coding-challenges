import type { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { Layers } from 'lucide-react';

import { cn } from '@/lib/tailwind';

import { Button } from '@/components/ui/button';

export const MainHeader: FC = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-x-12">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600">
              <Layers className="h-4 w-4 text-white" />
            </div>
            <span className="text-lg font-semibold text-slate-900">Xmas App</span>
          </Link>
          <div className="hidden md:flex md:gap-x-8">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium transition-colors hover:text-blue-600',
                  isActive ? 'text-blue-600' : 'text-slate-700',
                )
              }
            >
              Features
            </NavLink>
            <NavLink
              to="/#testimonials"
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium transition-colors hover:text-blue-600',
                  isActive ? 'text-blue-600' : 'text-slate-700',
                )
              }
            >
              Testimonials
            </NavLink>
            <NavLink
              to="/#pricing"
              className={({ isActive }) =>
                cn(
                  'text-sm font-medium transition-colors hover:text-blue-600',
                  isActive ? 'text-blue-600' : 'text-slate-700',
                )
              }
            >
              Pricing
            </NavLink>
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <Link
            to="/login"
            className="hidden text-sm font-medium text-slate-700 transition-colors hover:text-blue-600 sm:block"
          >
            Sign in
          </Link>
          <Button asChild className="bg-blue-600 hover:bg-blue-500">
            <Link to="/register">Get started</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};
