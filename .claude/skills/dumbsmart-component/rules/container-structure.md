---
title: Container Structure - Hook Orchestration
impact: HIGH
impactDescription: Clean separation between logic and presentation
tags: container, orchestration, smart-component
---

## Container Structure - Hook Orchestration

Container orchestrates hooks and decides which view to render. It receives ContainerProps and passes ViewProps to the view.

**Incorrect (logic in container):**

```tsx
// container.tsx
import { useState, useEffect } from "react";
import { getExercise } from "@/db";
import View from "./view";

const Container = ({ id }: { id: number }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getExercise(id).then((result) => {
      setData(result);
      setLoading(false);
    });
  }, [id]);

  return <View data={data} isLoading={loading} />;
};
```

**Correct (hooks handle logic, container orchestrates):**

```tsx
// container.tsx
import React from "react";
import View from "./view";
import ViewLoading from "./view.loading";
import useComponent from "./hooks";
import { ContainerProps } from "./types";

const Container = ({ id }: ContainerProps) => {
  const { data, isLoading, error } = useComponent({ id });

  if (isLoading) return <ViewLoading />;

  return <View data={data} error={error} />;
};

export default Container;
```

**Complex Example (multiple hooks + variants):**

```tsx
// container.tsx
import React from "react";
import View from "./view";
import ViewLoading from "./view.loading";
import useItem from "./hooks";
import { ContainerProps } from "./types";

const Container = ({ item }: ContainerProps) => {
  const {
    data,
    isLoading,
    error,
    editDialog,
    deleteDialog,
    deleteMutation,
    isDeleting,
  } = useItem({ id: item.id });

  if (isLoading) return <ViewLoading />;

  return (
    <View
      item={item}
      data={data}
      error={error}
      editDialog={editDialog}
      deleteDialog={deleteDialog}
      onDelete={deleteMutation}
      isDeleting={isDeleting}
    />
  );
};

export default Container;
```

**Key Rules:**
- No useState, useEffect, or business logic
- Only call hooks and decide which view to render
- Handle loading/error states by rendering variant views
