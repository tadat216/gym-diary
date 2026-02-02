import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";
import { workout_exercises_details } from "../schema";

// Initialize database connection
const expoDb = openDatabaseSync("gym-diary.db");
const db = drizzle(expoDb);

export type WorkoutExerciseDetail =
  typeof workout_exercises_details.$inferSelect;
export type NewWorkoutExerciseDetail =
  typeof workout_exercises_details.$inferInsert;

/**
 * Get all workout exercise details
 * @returns Promise with array of all workout exercise details
 */
export async function getAllWorkoutExerciseDetails(): Promise<
  WorkoutExerciseDetail[]
> {
  try {
    const result = await db.select().from(workout_exercises_details);
    return result;
  } catch (error) {
    console.error("Error fetching all workout exercise details:", error);
    throw error;
  }
}

/**
 * Get a single workout exercise detail by ID
 * @param id - The workout exercise detail ID
 * @returns Promise with the workout exercise detail or undefined if not found
 */
export async function getWorkoutExerciseDetailById(
  id: number,
): Promise<WorkoutExerciseDetail | undefined> {
  try {
    const result = await db
      .select()
      .from(workout_exercises_details)
      .where(eq(workout_exercises_details.id, id));
    return result[0];
  } catch (error) {
    console.error(
      `Error fetching workout exercise detail with id ${id}:`,
      error,
    );
    throw error;
  }
}

/**
 * Get workout exercise details by workout exercise ID
 * @param workoutExerciseId - The workout exercise ID
 * @returns Promise with array of workout exercise details for that workout exercise
 */
export async function getWorkoutExerciseDetailsByWorkoutExercise(
  workoutExerciseId: number,
): Promise<WorkoutExerciseDetail[]> {
  try {
    const result = await db
      .select()
      .from(workout_exercises_details)
      .where(
        eq(workout_exercises_details.workout_exercise_id, workoutExerciseId),
      );
    return result;
  } catch (error) {
    console.error(
      `Error fetching workout exercise details for workout exercise ${workoutExerciseId}:`,
      error,
    );
    throw error;
  }
}

/**
 * Create a new workout exercise detail
 * @param detail - The workout exercise detail data (without id)
 * @returns Promise with the created workout exercise detail
 */
export async function createWorkoutExerciseDetail(
  detail: NewWorkoutExerciseDetail,
): Promise<WorkoutExerciseDetail> {
  try {
    const result = await db
      .insert(workout_exercises_details)
      .values(detail)
      .returning();
    return result[0];
  } catch (error) {
    console.error("Error creating workout exercise detail:", error);
    throw error;
  }
}

/**
 * Update an existing workout exercise detail
 * @param id - The workout exercise detail ID to update
 * @param detail - Partial workout exercise detail data to update
 * @returns Promise with the updated workout exercise detail
 */
export async function updateWorkoutExerciseDetail(
  id: number,
  detail: Partial<NewWorkoutExerciseDetail>,
): Promise<WorkoutExerciseDetail | undefined> {
  try {
    const result = await db
      .update(workout_exercises_details)
      .set(detail)
      .where(eq(workout_exercises_details.id, id))
      .returning();
    return result[0];
  } catch (error) {
    console.error(
      `Error updating workout exercise detail with id ${id}:`,
      error,
    );
    throw error;
  }
}

/**
 * Delete a workout exercise detail
 * @param id - The workout exercise detail ID to delete
 * @returns Promise with void
 */
export async function deleteWorkoutExerciseDetail(id: number): Promise<void> {
  try {
    await db
      .delete(workout_exercises_details)
      .where(eq(workout_exercises_details.id, id));
  } catch (error) {
    console.error(
      `Error deleting workout exercise detail with id ${id}:`,
      error,
    );
    throw error;
  }
}
