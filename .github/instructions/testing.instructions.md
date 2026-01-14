---
applyTo: '**/*.spec.ts,**/*.spec.tsx,e2e/**/*.ts'
name: 'Testing'
description: 'Unit and E2E testing conventions'
---

# Unit Tests

Uses Bun's built-in test runner with @testing-library/react:

```ts
import { expect, test } from 'bun:test';
import { render, screen } from '@testing-library/react';

test('renders component', () => {
  render(<MyComponent />);
  expect(screen.getByText('Hello')).toBeInTheDocument();
});
```

Test files: `*.spec.ts` or `*.spec.tsx` in `src/`

# Testing Utilities

Use render wrappers from `@/lib/testing-library` based on what providers your component needs:

| Wrapper                            | Provides                           | Use when                                              |
| ---------------------------------- | ---------------------------------- | ----------------------------------------------------- |
| `renderTestWithRoutersWrapper`     | MemoryRouter                       | Component uses react-router (Link, useNavigate, etc.) |
| `renderTestWithQueryClientWrapper` | QueryClientProvider                | Component uses react-query (useQuery, useMutation)    |
| `renderTestWithAllProviders`       | QueryClientProvider + MemoryRouter | Component uses both react-router and react-query      |

```tsx
import { screen } from '@testing-library/react';
import { describe, expect, it } from 'bun:test';

import { renderTestWithAllProviders } from '@/lib/testing-library';

import { MyComponent } from './MyComponent';

describe('MyComponent', () => {
  it('Should render navigation links', () => {
    renderTestWithAllProviders(<MyComponent />);

    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '/');
  });
});
```

# Mocking

Use `mock.module()` from `bun:test` to mock modules. Mocks must be defined before importing the module under test:

```tsx
import { createMemoryRouter } from 'react-router-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, it, mock } from 'bun:test';

import App from './App';

const MockComponent = () => <div data-testid="mock">Mock</div>;

mock.module('@/components/MyComponent', () => ({
  MyComponent: MockComponent,
}));

// For router-based components, mock routerConfigs with createMemoryRouter
mock.module('@/pages', () => ({
  routerConfigs: createMemoryRouter([{ path: '/', element: <MockComponent /> }]),
}));

describe('App', () => {
  it('Should render mocked component', () => {
    render(<App />);
    expect(screen.getByTestId('mock')).toBeInTheDocument();
  });
});
```

# E2E Tests

Uses Playwright for cross-browser testing (Chromium, Firefox, WebKit):

```ts
import { expect, test } from '@playwright/test';

test('page loads', async ({ page }) => {
  await page.goto('http://localhost:3000');
  await expect(page.locator('h1')).toBeVisible();
});
```

Test files: `e2e/*.spec.ts`
