---
title: View Structure - Pure Presentational Components
impact: HIGH
impactDescription: Predictable and testable UI components
tags: view, presentation, ui
---

## View Structure - Pure Presentational Components

Views are pure presentational components that receive all data via props. No hooks, no logic, just rendering.

**Incorrect (view contains business logic):**

```tsx
// view.tsx
import { useQuery } from "@tanstack/react-query";
import { getExercise } from "@/db";

const View = ({ id }: { id: number }) => {
  // Bad: data fetching in view
  const { data } = useQuery(['exercise', id], () => getExercise(id));

  // Bad: business logic in view
  const isHighIntensity = data.sets > 5;

  return (
    <View>
      <Text>{data.name}</Text>
      {isHighIntensity && <Badge>High Intensity</Badge>}
    </View>
  );
};
```

**Correct (pure presentation):**

```tsx
// view.tsx
import React from "react";
import { View, Text } from "react-native";
import { ViewProps } from "./types";

const ComponentView = ({ exercise, isHighIntensity }: ViewProps) => {
  return (
    <View>
      <Text>{exercise.name}</Text>
      {isHighIntensity && <Badge>High Intensity</Badge>}
    </View>
  );
};

export default ComponentView;
```

**Key Rules:**
- No hooks (useState, useEffect, useQuery, etc.)
- No business logic (all logic handled in container or hooks)
- Receive all data via typed ViewProps
- Only rendering logic (map, conditional rendering, styling)
