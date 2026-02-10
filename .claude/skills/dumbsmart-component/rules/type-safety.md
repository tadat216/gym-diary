---
title: Type Safety - Props and Hook Interfaces
impact: HIGH
impactDescription: Catch errors at compile time, better IDE support
tags: typescript, type-safety, interfaces
---

## Type Safety - Props and Hook Interfaces

All components, views, hooks, and containers must have explicit TypeScript types. No `any` types allowed.

**Incorrect (missing or loose types):**

```tsx
// types.ts
export interface ViewProps {
  data: any;
  onPress: any;
}

// hooks/useComponent.tsx
const useComponent = (id: any) => {
  // No return type
  const data = fetchData(id);
  return { data };
};

// view.tsx
const View = (props: any) => {
  return <Text>{props.data}</Text>;
};
```

**Correct (explicit types everywhere):**

```tsx
// types.ts
import { Exercise } from "@/db";

export interface ContainerProps {
  exercise: Exercise;
}

export interface ViewProps {
  exercise: Exercise;
  isLoading: boolean;
  onEdit: () => void;
  onDelete: () => void;
}
```

```tsx
// hooks/useComponent.tsx
interface UseComponentProps {
  id: number;
}

interface UseComponentReturn {
  data: Exercise | null;
  isLoading: boolean;
  error: Error | null;
}

const useComponent = ({ id }: UseComponentProps): UseComponentReturn => {
  const { data, isLoading, error } = useQuery<Exercise>(
    ['exercise', id],
    () => fetchExercise(id)
  );

  return { data: data ?? null, isLoading, error };
};
```

```tsx
// view.tsx
import { ViewProps } from "./types";

const View = ({ exercise, isLoading, onEdit, onDelete }: ViewProps) => {
  return (
    <View>
      <Text>{exercise.name}</Text>
      <Button onPress={onEdit}>Edit</Button>
      <Button onPress={onDelete}>Delete</Button>
    </View>
  );
};

export default View;
```

**Key Rules:**
- Define interfaces for all props and hook parameters
- Hook return types can be inferred or explicit
- Use `| null` or `| undefined` for optional values, not `any`
- Use proper React types: `React.ReactNode`, `() => void`, etc.
