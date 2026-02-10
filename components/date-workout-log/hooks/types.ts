import type { Workout, WorkoutExercise } from "@/db";

export interface UseGetParamsReturns {
  date: string;
}

export interface UseWorkoutForDateReturns {
  workout?: Workout | null;
  isLoadingWorkout: boolean;
  error: Error | null;
}

export interface UseWorkoutExercisesReturns {
  workoutExercises?: WorkoutExercise[];
  isLoadingExercises: boolean;
  error: Error | null;
}
