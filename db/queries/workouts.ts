import { eq } from "drizzle-orm";
import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";
import { workouts } from "../schema";

// Initialize database connection
const expoDb = openDatabaseSync("gym-diary.db");
const db = drizzle(expoDb);

export type Workout = typeof workouts.$inferSelect;
export type NewWorkout = typeof workouts.$inferInsert;

/**
 * Get all workouts
 * @returns Promise with array of all workouts
 */
export async function getAllWorkouts(): Promise<Workout[]> {
  try {
    const result = await db.select().from(workouts);
    return result;
  } catch (error) {
    console.error("Error fetching all workouts:", error);
    throw error;
  }
}

/**
 * Get a single workout by ID
 * @param id - The workout ID
 * @returns Promise with the workout or undefined if not found
 */
export async function getWorkoutById(id: number): Promise<Workout | undefined> {
  try {
    const result = await db.select().from(workouts).where(eq(workouts.id, id));
    return result[0];
  } catch (error) {
    console.error(`Error fetching workout with id ${id}:`, error);
    throw error;
  }
}

/**
 * Get workouts by date
 * @param date - The workout date
 * @returns Promise with array of workouts for that date
 */
export async function getWorkoutsByDate(date: string): Promise<Workout[]> {
  try {
    const result = await db
      .select()
      .from(workouts)
      .where(eq(workouts.date, date));
    return result;
  } catch (error) {
    console.error(`Error fetching workouts for date ${date}:`, error);
    throw error;
  }
}

/**
 * Create a new workout
 * @param workout - The workout data (without id)
 * @returns Promise with the created workout
 */
export async function createWorkout(workout: NewWorkout): Promise<Workout> {
  try {
    const result = await db.insert(workouts).values(workout).returning();
    return result[0];
  } catch (error) {
    console.error("Error creating workout:", error);
    throw error;
  }
}

/**
 * Update an existing workout
 * @param id - The workout ID to update
 * @param workout - Partial workout data to update
 * @returns Promise with the updated workout
 */
export async function updateWorkout(
  id: number,
  workout: Partial<NewWorkout>,
): Promise<Workout | undefined> {
  try {
    const result = await db
      .update(workouts)
      .set(workout)
      .where(eq(workouts.id, id))
      .returning();
    return result[0];
  } catch (error) {
    console.error(`Error updating workout with id ${id}:`, error);
    throw error;
  }
}

/**
 * Delete a workout
 * @param id - The workout ID to delete
 * @returns Promise with void
 */
export async function deleteWorkout(id: number): Promise<void> {
  try {
    await db.delete(workouts).where(eq(workouts.id, id));
  } catch (error) {
    console.error(`Error deleting workout with id ${id}:`, error);
    throw error;
  }
}
