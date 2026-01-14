---
applyTo: '**/*.ts,**/*.tsx'
name: 'TypeScript & React'
description: 'Code style and component conventions for TypeScript and React files'
---

# Code Style (Prettier Config)

Strictly follow these Prettier rules:

- **Single quotes** for strings (`singleQuote: true`)
- **Semicolons** required (`semi: true`)
- **Trailing commas** everywhere (`trailingComma: 'all'`)
- **120 character** line width (`printWidth: 120`)
- **2 spaces** for indentation (`tabWidth: 2`)
- **Avoid parentheses** around single arrow function parameters (`arrowParens: 'avoid'`)

```ts
// Good
const fn = x => x * 2;
const obj = { a: 1, b: 2, };
const arr = [1, 2, 3,];

// Bad
const fn = (x) => x * 2;
const obj = { a: 1, b: 2 };
const arr = [1, 2, 3];
```

# Import Order

Imports are auto-sorted via `@trivago/prettier-plugin-sort-imports` with blank line separation:

1. React imports (`react`, `react-dom`, etc.)
2. Third-party modules
3. `@/types/*`
4. `@/constants/*`
5. `@/hooks/*`
6. `@/services/*`
7. `@/store/*`
8. `@/lib/*` (third-party library utilities and wrappers)
9. `@/components/*`
10. `@/pages/*`
11. `@/mocks/*`
12. Relative imports (non-assets)
13. Image assets (`.png`, `.jpg`, `.jpeg`, `.svg`, `.gif`, `.webp`)
14. CSS files (`.css`)

```tsx
import { useState } from 'react';

import { useLogin } from '@/hooks/useAuthServices';
import { z } from 'zod';

import { GENERAL_REGEX } from '@/constants/validation';

import { authService } from '@/services/authService';

import { cn } from '@/lib/tailwind';

import { Form } from '@/components/Form';

import { VALIDATION_MESSAGES } from './LoginPage.constants';

import './styles.css';
```

# Additional Rules

- Prefix unused variables with `_`
- Use `Array<type>` instead of `type[]` for array types
- Use HTML entities for spaces in JSX, not `{' '}`:

```tsx
// Good
<p>Hello&nbsp;<Link to="/">world</Link></p>

// Bad
<p>Hello{' '}<Link to="/">world</Link></p>
```

Pre-commit hooks run ESLint and Prettier via Husky + lint-staged.

# Component Conventions

Use arrow functions with `FC` type for React components:

```tsx
import type { FC } from 'react';

interface MyComponentProps {
  title: string;
  isActive?: boolean;
}

export const MyComponent: FC<MyComponentProps> = ({ title, isActive = false }) => {
  return <div className={cn('base-class', isActive && 'active-class')}>{title}</div>;
};
```

# Data Fetching

Use Axios with TanStack React Query for API calls:

```tsx
import { useMutation, useQuery } from '@tanstack/react-query';

import axiosInstance from '@/lib/axios';

// Query example
const { data, isLoading } = useQuery({
  queryKey: ['users'],
  queryFn: () => axiosInstance.get('/users').then(res => res.data),
});

// Mutation example
const { mutateAsync, isPending } = useMutation({
  mutationFn: (data: CreateUserRequest) => axiosInstance.post('/users', data),
});
```

# Custom Hooks

Place custom hooks in `src/hooks/`. Group related hooks by domain (e.g., `useAuthServices.ts` for auth hooks):

```tsx
import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import type { LoginRequest, LoginResponse } from '@/services/authService';
import { authService } from '@/services/authService';

export const useLogin = () => {
  const navigate = useNavigate();

  const { mutateAsync, isPending, isSuccess, error, data, reset } = useMutation<LoginResponse, Error, LoginRequest>({
    mutationFn: authService.login,
    onSuccess: () => {
      navigate('/');
    },
  });

  const login = async (credentials: LoginRequest) => {
    reset();
    return mutateAsync(credentials);
  };

  return { login, isLoading: isPending, isSuccess, error, data };
};
```

# Services

Place API services in `src/services/`. Define request/response types alongside service methods:

```tsx
export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token: string;
}

export const authService = {
  login: (credentials: LoginRequest): Promise<LoginResponse> => {
    return axiosInstance.post('/auth/login', credentials).then(res => res.data);
  },
};
```
