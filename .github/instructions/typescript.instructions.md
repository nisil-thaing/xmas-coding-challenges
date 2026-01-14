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
5. `@/services/*`
6. `@/store/*`
7. `@/lib/*` (third-party library utilities and wrappers)
8. `@/components/*`
9. `@/views/*`
10. `@/mocks/*`
11. Relative imports (non-assets)
12. Image assets (`.png`, `.jpg`, `.jpeg`, `.svg`, `.gif`, `.webp`)
13. CSS files (`.css`)

```tsx
import { useState } from 'react';

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
