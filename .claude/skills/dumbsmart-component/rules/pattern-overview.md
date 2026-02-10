---
title: DumbSmart Component Pattern Structure
impact: HIGH
impactDescription: Ensures consistent component architecture across the project
tags: architecture, pattern, structure
---

## DumbSmart Component Pattern Structure

Every component follows this structure for clear separation of concerns:

```
component-name/
├── hooks/
│   ├── useHookA.tsx
│   ├── useHookB.tsx
│   └── index.ts (exports main hook or individual hooks)
├── types.ts (ContainerProps, ViewProps, hook interfaces)
├── view.tsx (presentational component)
├── view.loading.tsx (optional variant)
├── container.tsx (orchestrates hooks + view)
└── index.ts (exports container as default)
```

**Key Principles:**
1. **Container**: Receives props, calls hooks, passes results to view
2. **View**: Pure presentation with typed ViewProps
3. **Hooks**: Single-responsibility, composed in main hook or container
4. **Types**: Separate ContainerProps and ViewProps interfaces
5. **Exports**: Container is default export from index.ts

**Incorrect (mixed concerns in single file):**

```tsx
// component.tsx
export function Component({ id }: { id: number }) {
  const { data, isLoading } = useQuery(['item', id], () => fetchItem(id))

  if (isLoading) return <Skeleton />

  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  )
}
```

**Correct (separated concerns):**

```tsx
// container.tsx
import View from "./view";
import ViewLoading from "./view.loading";
import useComponent from "./hooks";
import { ContainerProps } from "./types";

const Container = ({ id }: ContainerProps) => {
  const { data, isLoading } = useComponent({ id });

  if (isLoading) return <ViewLoading />;

  return <View data={data} />;
};

export default Container;
```

**Complete Example Structure:**

```
user-profile/
├── hooks/
│   ├── useUserData.tsx       # Fetches user data
│   └── index.ts              # Exports useUserData
├── types.ts                   # ContainerProps, ViewProps
├── view.tsx                   # Renders user info
├── view.loading.tsx           # Loading skeleton
├── container.tsx              # Orchestrates hook + view
└── index.ts                   # Exports container as default
```
