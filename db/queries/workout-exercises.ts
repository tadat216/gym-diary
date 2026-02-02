import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";
import { workout_exercises } from "../schema";

// Initialize database connection
const expoDb = openDatabaseSync("gym-diary.db");
const db = drizzle(expoDb);

export type WorkoutExercise = typeof workout_exercises.$inferSelect;
export type NewWorkoutExercise = typeof workout_exercises.$inferInsert;

/**
 * Get all workout exercises
 * @returns Promise with array of all workout exercises
 */
export async function getAllWorkoutExercises(): Promise<WorkoutExercise[]> {
  try {
    const result = await db.select().from(workout_exercises);
    return result;
  } catch (error) {
    console.error("Error fetching all workout exercises:", error);
    throw error;
  }
}

/**
 * Get a single workout exercise by ID
 * @param id - The workout exercise ID
 * @returns Promise with the workout exercise or undefined if not found
 */
export async function getWorkoutExerciseById(
  id: number,
): Promise<WorkoutExercise | undefined> {
  try {
    const result = await db
      .select()
      .from(workout_exercises)
      .where(eq(workout_exercises.id, id));
    return result[0];
  } catch (error) {
    console.error(`Error fetching workout exercise with id ${id}:`, error);
    throw error;
  }
}

/**
 * Get workout exercises by workout ID
 * @param workoutId - The workout ID
 * @returns Promise with array of workout exercises for that workout
 */
export async function getWorkoutExercisesByWorkout(
  workoutId: number,
): Promise<WorkoutExercise[]> {
  try {
    const result = await db
      .select()
      .from(workout_exercises)
      .where(eq(workout_exercises.workout_id, workoutId));
    return result;
  } catch (error) {
    console.error(
      `Error fetching workout exercises for workout ${workoutId}:`,
      error,
    );
    throw error;
  }
}

/**
 * Get workout exercises by exercise ID
 * @param exerciseId - The exercise ID
 * @returns Promise with array of workout exercises for that exercise
 */
export async function getWorkoutExercisesByExercise(
  exerciseId: number,
): Promise<WorkoutExercise[]> {
  try {
    const result = await db
      .select()
      .from(workout_exercises)
      .where(eq(workout_exercises.exercise_id, exerciseId));
    return result;
  } catch (error) {
    console.error(
      `Error fetching workout exercises for exercise ${exerciseId}:`,
      error,
    );
    throw error;
  }
}

/**
 * Create a new workout exercise
 * @param workoutExercise - The workout exercise data (without id)
 * @returns Promise with the created workout exercise
 */
export async function createWorkoutExercise(
  workoutExercise: NewWorkoutExercise,
): Promise<WorkoutExercise> {
  try {
    const result = await db
      .insert(workout_exercises)
      .values(workoutExercise)
      .returning();
    return result[0];
  } catch (error) {
    console.error("Error creating workout exercise:", error);
    throw error;
  }
}

/**
 * Update an existing workout exercise
 * @param id - The workout exercise ID to update
 * @param workoutExercise - Partial workout exercise data to update
 * @returns Promise with the updated workout exercise
 */
export async function updateWorkoutExercise(
  id: number,
  workoutExercise: Partial<NewWorkoutExercise>,
): Promise<WorkoutExercise | undefined> {
  try {
    const result = await db
      .update(workout_exercises)
      .set(workoutExercise)
      .where(eq(workout_exercises.id, id))
      .returning();
    return result[0];
  } catch (error) {
    console.error(`Error updating workout exercise with id ${id}:`, error);
    throw error;
  }
}

/**
 * Delete a workout exercise
 * @param id - The workout exercise ID to delete
 * @returns Promise with void
 */
export async function deleteWorkoutExercise(id: number): Promise<void> {
  try {
    await db.delete(workout_exercises).where(eq(workout_exercises.id, id));
  } catch (error) {
    console.error(`Error deleting workout exercise with id ${id}:`, error);
    throw error;
  }
}
