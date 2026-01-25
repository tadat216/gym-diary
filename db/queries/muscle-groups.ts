import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";
import { eq } from "drizzle-orm";
import { muscle_groups } from "../schema";

// Initialize database connection
const expoDb = openDatabaseSync("gym-diary.db");
const db = drizzle(expoDb);

export type MuscleGroup = typeof muscle_groups.$inferSelect;
// Type for creating a new muscle group (without id)
export type NewMuscleGroup = typeof muscle_groups.$inferInsert;

/**
 * Get all muscle groups
 * @returns Promise with array of all muscle groups
 */
export async function getAllMuscleGroups(): Promise<MuscleGroup[]> {
  try {
    const result = await db.select().from(muscle_groups);
    return result;
  } catch (error) {
    console.error("Error fetching all muscle groups:", error);
    throw error;
  }
}

/**
 * Get a single muscle group by ID
 * @param id - The muscle group ID
 * @returns Promise with the muscle group or undefined if not found
 */
export async function getMuscleGroupById(
  id: number,
): Promise<MuscleGroup | undefined> {
  try {
    const result = await db
      .select()
      .from(muscle_groups)
      .where(eq(muscle_groups.id, id));
    return result[0];
  } catch (error) {
    console.error(`Error fetching muscle group with id ${id}:`, error);
    throw error;
  }
}

/**
 * Create a new muscle group
 * @param muscleGroup - The muscle group data (without id)
 * @returns Promise with the created muscle group
 */
export async function createMuscleGroup(
  muscleGroup: NewMuscleGroup,
): Promise<MuscleGroup> {
  try {
    const result = await db
      .insert(muscle_groups)
      .values(muscleGroup)
      .returning();
    return result[0];
  } catch (error) {
    console.error("Error creating muscle group:", error);
    throw error;
  }
}

/**
 * Update an existing muscle group
 * @param id - The muscle group ID to update
 * @param muscleGroup - Partial muscle group data to update
 * @returns Promise with the updated muscle group
 */
export async function updateMuscleGroup(
  id: number,
  muscleGroup: Partial<NewMuscleGroup>,
): Promise<MuscleGroup | undefined> {
  try {
    const result = await db
      .update(muscle_groups)
      .set(muscleGroup)
      .where(eq(muscle_groups.id, id))
      .returning();
    return result[0];
  } catch (error) {
    console.error(`Error updating muscle group with id ${id}:`, error);
    throw error;
  }
}

/**
 * Delete a muscle group
 * @param id - The muscle group ID to delete
 * @returns Promise with void
 */
export async function deleteMuscleGroup(id: number): Promise<void> {
  try {
    await db.delete(muscle_groups).where(eq(muscle_groups.id, id));
  } catch (error) {
    console.error(`Error deleting muscle group with id ${id}:`, error);
    throw error;
  }
}

/**
 * Seed initial muscle groups
 * Only runs if the table is empty
 */
export async function seedMuscleGroups(): Promise<void> {
  try {
    const existing = await getAllMuscleGroups();
    if (existing.length > 0) {
      console.log("Muscle groups already seeded");
      return;
    }

    const initialMuscleGroups: NewMuscleGroup[] = [
      { name: "Chest", color_hex: "#FF6B6B" },
      { name: "Upper Back", color_hex: "#4ECDC4" },
      { name: "Lats", color_hex: "#4ECDC4" },
      { name: "Hammys", color_hex: "#45B7D1" },
      { name: "Quads", color_hex: "#FFD93D" },
      { name: "Calves", color_hex: "#F27059" },
      { name: "Shoulders", color_hex: "#FFA07A" },
      { name: "Biceps", color_hex: "#98D8C8" },
      { name: "Triceps", color_hex: "#FFB347" },
    ];

    for (const muscleGroup of initialMuscleGroups) {
      await createMuscleGroup(muscleGroup);
    }

    console.log("Muscle groups seeded successfully");
  } catch (error) {
    console.error("Error seeding muscle groups:", error);
    throw error;
  }
}
