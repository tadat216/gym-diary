---
title: Exports Structure - Container as Default Export
impact: MEDIUM
impactDescription: Consistent import pattern across project
tags: exports, imports, module
---

## Exports Structure - Container as Default Export

Always export the container as the default export from `index.ts`. This makes the smart component the public API.

**Incorrect (exporting view or multiple exports):**

```tsx
// index.ts
export { default as View } from "./view";
export { default as Container } from "./container";
```

```tsx
// Usage (confusing which to import)
import { Container } from "@/components/item";
// or
import { View } from "@/components/item";
```

**Correct (container as default):**

```tsx
// index.ts
export { default } from "./container";
```

```tsx
// Usage (clear and consistent)
import Item from "@/components/item";

function Parent() {
  return <Item id={123} />;
}
```

**Why Container as Default?**
- Container is the "public API" of the component
- View is an implementation detail
- Parent components should always use the smart component
- Consistent pattern across all components
