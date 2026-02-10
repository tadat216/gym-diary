---
title: Hooks Composition - Main Hook Pattern
impact: MEDIUM
impactDescription: Composable and testable hook architecture
tags: hooks, composition, index
---

## Hooks Composition - Main Hook Pattern

For complex components with multiple hooks, create a main hook in `hooks/index.ts` that composes them. For simple components, just re-export the single hook.

**Simple Pattern (single hook):**

```tsx
// hooks/index.ts
export { default } from "./useComponentName";
```

**Complex Pattern (composed hooks):**

```tsx
// hooks/index.ts
import useItemData from "./useItemData";
import useDeleteItem from "./useDeleteItem";
import useItemDialogs from "./useItemDialogs";

interface UseItemProps {
  id: number;
}

const useItem = ({ id }: UseItemProps) => {
  const { data, isLoading, error } = useItemData(id);
  const { deleteDialog, deleteMutation, isDeleting } = useDeleteItem(id);
  const { editDialog, addDialog } = useItemDialogs();

  return {
    data,
    isLoading,
    error,
    deleteDialog,
    deleteMutation,
    isDeleting,
    editDialog,
    addDialog,
  };
};

export default useItem;
```

**Container Usage:**

```tsx
// container.tsx
import useItem from "./hooks";

const Container = ({ item }: ContainerProps) => {
  const hookResults = useItem({ id: item.id });

  return <View {...hookResults} />;
};
```

**When to Compose:**
- Component needs 3+ hooks
- Hooks share common parameters
- Want to test hook logic as a unit
- Container should stay simple

**When NOT to Compose:**
- Only 1-2 hooks
- Hooks are completely independent
- Simple components
