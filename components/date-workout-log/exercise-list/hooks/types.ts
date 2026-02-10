import type { Exercise, WorkoutExercise, WorkoutExerciseDetail } from "@/db";

export interface UseExerciseListProps {
  workoutExercises?: WorkoutExercise[];
  workoutId?: number;
}

export interface WorkoutExerciseWithDetails extends WorkoutExercise {
  exercise: Exercise;
  sets: WorkoutExerciseDetail[];
}

export interface UseExerciseListReturns {
  workoutExercisesWithDetails: WorkoutExerciseWithDetails[];
  onDeleteExercise: (id: number) => void;
  isDeleting: boolean;
}

export interface UseDeleteExerciseProps {
  workoutId?: number;
}

export interface UseDeleteExerciseReturns {
  deleteExercise: (id: number) => void;
  isDeleting: boolean;
}
