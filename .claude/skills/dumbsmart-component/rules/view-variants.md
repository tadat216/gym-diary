---
title: View Variants - Loading, Empty, and Error States
impact: MEDIUM
impactDescription: Better UX with appropriate feedback states
tags: view, variants, loading, error
---

## View Variants - Loading, Empty, and Error States

Create separate view files for different states (loading, empty, error). Name them by purpose: `view.loading.tsx`, `view.empty.tsx`, `view.error.tsx`.

**Incorrect (all states in one view):**

```tsx
// view.tsx
const View = ({ data, isLoading, error }: ViewProps) => {
  if (isLoading) {
    return <Skeleton />;
  }

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  if (!data || data.length === 0) {
    return <Text>No items found</Text>;
  }

  return <FlatList data={data} renderItem={...} />;
};
```

**Correct (separate variant files):**

```tsx
// view.loading.tsx
import { Skeleton } from "@rneui/themed";

const ViewLoading = () => {
  return (
    <>
      {Array.from({ length: 5 }).map((_, i) => (
        <Skeleton key={i} animation="wave" height={40} width="100%" />
      ))}
    </>
  );
};

export default ViewLoading;
```

```tsx
// view.empty.tsx
import { View, Text } from "react-native";

const ViewEmpty = () => {
  return (
    <View>
      <Text>No items found</Text>
    </View>
  );
};

export default ViewEmpty;
```

```tsx
// view.tsx (main view)
import { FlatList } from "react-native";
import { ViewProps } from "./types";

const View = ({ data }: ViewProps) => {
  return <FlatList data={data} renderItem={...} />;
};

export default View;
```

```tsx
// container.tsx (handles which view to show)
import View from "./view";
import ViewLoading from "./view.loading";
import ViewEmpty from "./view.empty";

const Container = ({ id }: ContainerProps) => {
  const { data, isLoading } = useComponent({ id });

  if (isLoading) return <ViewLoading />;
  if (!data || data.length === 0) return <ViewEmpty />;

  return <View data={data} />;
};
```

**Common Variants:**
- `view.loading.tsx` - Skeleton or spinner while loading
- `view.empty.tsx` - Empty state when no data
- `view.error.tsx` - Error display with retry option
- `view.offline.tsx` - Network error state
