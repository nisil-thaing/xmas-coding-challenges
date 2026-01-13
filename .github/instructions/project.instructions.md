---
applyTo: '**/*'
name: 'Project Overview'
description: 'General project conventions for Bun + React + Tailwind app'
---

# Project Overview

This is a React + TypeScript web application using Bun runtime with Tailwind CSS v4 and shadcn/ui components.

## Runtime

Use Bun instead of Node.js for all operations:

- `bun <file>` instead of `node <file>` or `ts-node <file>`
- `bun install` instead of `npm install`
- `bun run <script>` instead of `npm run <script>`
- `bunx <package>` instead of `npx <package>`
- Bun auto-loads `.env` files - don't use dotenv

## Project Structure

```
src/
├── components/      # Shared components
│   └── ui/          # shadcn/ui components (button, card, input, etc.)
├── pages/           # Page components with routing config
│   ├── DashboardPage/
│   ├── LoginPage/
│   ├── NotFoundPage/
│   └── index.tsx    # Router configuration
├── lib/utils.ts     # Utility functions (cn for class merging)
├── types/           # TypeScript type definitions
├── App.tsx          # Main React app component with routing
├── frontend.tsx     # React entry point
├── index.ts         # Bun server entry point
├── index.html       # HTML template
└── index.css        # Global styles with Tailwind
e2e/                 # Playwright E2E tests
```

## Path Aliases

Use `@/*` for imports from `src/`:

```ts
import { cn } from '@/lib/utils';

import { Button } from '@/components/ui/button';
```

## Scripts

```bash
bun run dev          # Start dev server with HMR (port 3000)
bun run build        # Production build
bun run start        # Run production server
bun test src/        # Run unit tests
bun test src/ --watch       # Run tests in watch mode
bun test src/ --coverage    # Run tests with coverage (threshold: 90%)
bun x playwright test       # Run E2E tests
bun x playwright test --ui  # Run E2E tests with UI
bun run lint         # Run ESLint with auto-fix
bun run format       # Run Prettier
```
