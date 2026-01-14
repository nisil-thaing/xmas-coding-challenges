# Project Instructions

This project uses modular instruction files located in `.github/instructions/`:

| File                         | Applies To                               | Description                                         |
| ---------------------------- | ---------------------------------------- | --------------------------------------------------- |
| `project.instructions.md`    | All files                                | Project overview, runtime, structure, scripts       |
| `typescript.instructions.md` | `*.ts`, `*.tsx`                          | Code style, hooks, services, data fetching patterns |
| `testing.instructions.md`    | `*.spec.ts`, `*.spec.tsx`, `e2e/**/*.ts` | Unit and E2E testing conventions                    |
| `styling.instructions.md`    | `*.tsx`, `*.css`                         | Tailwind CSS and shadcn/ui                          |
| `server.instructions.md`     | `src/index.ts`                           | Bun server configuration                            |

## Task Planning

When working on tasks, follow this approach:

1. **Plan first** - Create a todo list to track steps before starting implementation
2. **Execute directly** - No need for excessive confirmation, proceed with the plan
3. **Ask only when necessary** - Only ask questions for genuine ambiguity

## Key Patterns

### Adding New Features

1. **API Integration**: Create service in `src/services/` with types
2. **Data Fetching**: Create hook in `src/hooks/` using React Query + service
3. **UI**: Create/update page component using the hook
4. **Testing**: Update tests with `renderTestWithAllProviders` wrapper

### File Locations

| What                   | Where                              |
| ---------------------- | ---------------------------------- |
| API services           | `src/services/<domain>Service.ts`  |
| Custom hooks           | `src/hooks/use<Domain>Services.ts` |
| Axios config           | `src/lib/axios.ts`                 |
| React Query config     | `src/lib/react-query.ts`           |
| Testing utilities      | `src/lib/testing-library.tsx`      |
| Page components        | `src/pages/<PageName>/`            |
| Shared components      | `src/components/`                  |
| UI primitives (shadcn) | `src/components/ui/`               |
