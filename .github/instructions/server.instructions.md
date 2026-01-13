---
applyTo: 'src/index.ts'
name: 'Server'
description: 'Bun server configuration'
---

# Server

The app uses `Bun.serve()` with HTML imports:

```ts
import index from './index.html';

Bun.serve({
  port: 3000,
  routes: {
    '/': index,
    '/api/endpoint': req => Response.json({ data: 'value' }),
  },
  development: { hmr: true, console: true },
});
```
