import type { Workout, WorkoutExercise } from "@/db";

export interface _ViewProps {
  date: string;
  workout?: Workout | null;
  workoutExercises?: WorkoutExercise[];
}
