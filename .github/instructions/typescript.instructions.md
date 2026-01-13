---
applyTo: '**/*.ts,**/*.tsx'
name: 'TypeScript & React'
description: 'Code style and component conventions for TypeScript and React files'
---

# Code Style

- **Single quotes** for strings
- **Semicolons** required
- **120 character** line width
- **Auto-sorted imports** (React first, then third-party, then local)
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
