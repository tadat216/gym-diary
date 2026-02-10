import type { WorkoutExercise, WorkoutExerciseDetail } from "@/db";
import type { WorkoutExerciseWithDetails } from "./hooks/types";

export interface ContainerProps {
  workoutExercises?: WorkoutExercise[];
  workoutId?: number;
}

export interface ViewProps {
  workoutExercisesWithDetails: WorkoutExerciseWithDetails[];
  onDeleteExercise: (id: number) => void;
  isDeleting: boolean;
  onAddSet: (workoutExerciseId: number) => void;
  onEditSet: (workoutExerciseId: number, set: WorkoutExerciseDetail) => void;
  dialogVisible: boolean;
  closeDialog: () => void;
  currentWorkoutExerciseId: number | null;
  editingSet: WorkoutExerciseDetail | null;
}
