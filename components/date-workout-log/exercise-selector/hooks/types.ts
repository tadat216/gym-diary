import type { Exercise } from "@/db";
import type { UseDialogReturn } from "@/hooks/useDialog";

export interface UseExerciseSelectorProps {
  workoutId?: number;
  date: string;
}

export interface UseExerciseSelectorReturns {
  dialog: UseDialogReturn;
  exercises: Exercise[];
  isLoading: boolean;
  onSelectExercise: (exerciseId: number) => void;
  isAdding: boolean;
}

export interface UseAllExercisesReturns {
  exercises: Exercise[];
  isLoading: boolean;
  error: Error | null;
}

export interface UseEnsureWorkoutProps {
  workoutId?: number;
  date: string;
}

export interface UseEnsureWorkoutReturns {
  ensureWorkoutExists: () => Promise<number>;
}

export interface UseAddToWorkoutProps {
  onSuccess: () => void;
  workoutId?: number;
}

export interface UseAddToWorkoutReturns {
  addExercise: (params: { workoutId: number; exerciseId: number }) => void;
  isAdding: boolean;
}
