---
applyTo: '**/*.tsx,**/*.css'
name: 'Styling'
description: 'Tailwind CSS and shadcn/ui conventions'
---

# Styling

- **Tailwind CSS v4** with `bun-plugin-tailwind`
- **shadcn/ui** components in `src/components/ui/`
- Use `cn()` from `@/lib/tailwind` for conditional class merging:

```tsx
import { cn } from '@/lib/tailwind';

<div className={cn('base-class', isActive && 'active-class')} />;
```

# Tailwind Class Ordering

Order Tailwind classes in the following sequence:

1. **Display** - `flex`, `block`, `inline-flex`, `grid`, `hidden`, `relative`, `absolute`, `fixed`
2. **Typography** - `text-*` (size), `font-*` (weight, family), `leading-*`, `tracking-*`
3. **Flexbox/Grid** - `flex-col`, `flex-row`, `items-*`, `justify-*`, `gap-*`, `space-*`
4. **Size** - `w-*`, `h-*`, `min-w-*`, `max-w-*`, `min-h-*`, `max-h-*`
5. **Padding** - `p-*`, `px-*`, `py-*`, `pt-*`, `pr-*`, `pb-*`, `pl-*`
6. **Margin** - `m-*`, `mx-*`, `my-*`, `mt-*`, `mr-*`, `mb-*`, `ml-*`
7. **Border** - `border-*`, `rounded-*`
8. **Text Color** - `text-{color}-*`
9. **Background** - `bg-*`
10. **Shadow** - `shadow-*`
11. **States** - `hover:*`, `focus:*`, `active:*`, `disabled:*`
12. **Responsive** - `sm:*`, `md:*`, `lg:*`, `xl:*`

Example:

```tsx
<div className="flex text-sm font-medium items-center justify-between h-11 w-full px-4 py-2 mt-4 rounded-md text-white bg-blue-600 shadow-sm hover:bg-blue-500" />
```

# Icons

- Use **lucide-react** for all icons in components
- Import icons individually to enable tree-shaking:

```tsx
import { ArrowRight, Layers, User } from 'lucide-react';

<ArrowRight className="h-4 w-4" />;
```
