import { drizzle } from "drizzle-orm/expo-sqlite";
import { openDatabaseSync } from "expo-sqlite";
import { eq } from "drizzle-orm";
import { exercises, muscle_groups } from "../schema";

// Initialize database connection
const expoDb = openDatabaseSync("gym-diary.db");
const db = drizzle(expoDb);

export type Exercise = typeof exercises.$inferSelect;
export type NewExercise = typeof exercises.$inferInsert;

/**
 * Get all exercises
 * @returns Promise with array of all exercises
 */
export async function getAllExercises(): Promise<Exercise[]> {
  try {
    const result = await db.select().from(exercises);
    return result;
  } catch (error) {
    console.error("Error fetching all exercises:", error);
    throw error;
  }
}

/**
 * Get a single exercise by ID
 * @param id - The exercise ID
 * @returns Promise with the exercise or undefined if not found
 */
export async function getExerciseById(
  id: number,
): Promise<Exercise | undefined> {
  try {
    const result = await db
      .select()
      .from(exercises)
      .where(eq(exercises.id, id));
    return result[0];
  } catch (error) {
    console.error(`Error fetching exercise with id ${id}:`, error);
    throw error;
  }
}

/**
 * Get exercises by muscle group ID
 * @param muscleGroupId - The muscle group ID
 * @returns Promise with array of exercises for that muscle group
 */
export async function getExercisesByMuscleGroup(
  muscleGroupId: number,
): Promise<Exercise[]> {
  try {
    const result = await db
      .select()
      .from(exercises)
      .where(eq(exercises.muscle_group_id, muscleGroupId));
    return result;
  } catch (error) {
    console.error(
      `Error fetching exercises for muscle group ${muscleGroupId}:`,
      error,
    );
    throw error;
  }
}

/**
 * Create a new exercise
 * @param exercise - The exercise data (without id)
 * @returns Promise with the created exercise
 */
export async function createExercise(exercise: NewExercise): Promise<Exercise> {
  try {
    const result = await db.insert(exercises).values(exercise).returning();
    return result[0];
  } catch (error) {
    console.error("Error creating exercise:", error);
    throw error;
  }
}

/**
 * Update an existing exercise
 * @param id - The exercise ID to update
 * @param exercise - Partial exercise data to update
 * @returns Promise with the updated exercise
 */
export async function updateExercise(
  id: number,
  exercise: Partial<NewExercise>,
): Promise<Exercise | undefined> {
  try {
    const result = await db
      .update(exercises)
      .set(exercise)
      .where(eq(exercises.id, id))
      .returning();
    return result[0];
  } catch (error) {
    console.error(`Error updating exercise with id ${id}:`, error);
    throw error;
  }
}

/**
 * Delete an exercise
 * @param id - The exercise ID to delete
 * @returns Promise with void
 */
export async function deleteExercise(id: number): Promise<void> {
  try {
    await db.delete(exercises).where(eq(exercises.id, id));
  } catch (error) {
    console.error(`Error deleting exercise with id ${id}:`, error);
    throw error;
  }
}

/**
 * Seed initial exercises
 * Only runs if the table is empty
 */
export async function seedExercises(): Promise<void> {
  try {
    const existing = await getAllExercises();
    if (existing.length > 0) {
      console.log("Exercises already seeded");
      return;
    }

    // Get muscle group IDs by name
    const muscleGroupsData = await db.select().from(muscle_groups);
    const getMuscleGroupId = (name: string): number => {
      const group = muscleGroupsData.find((mg) => mg.name === name);
      if (!group) {
        throw new Error(`Muscle group "${name}" not found`);
      }
      return group.id;
    };

    const initialExercises: NewExercise[] = [
      // Chest exercises
      { name: "Bench Press", muscle_group_id: getMuscleGroupId("Chest") },
      {
        name: "Incline Bench Press",
        muscle_group_id: getMuscleGroupId("Chest"),
      },
      { name: "Dumbbell Flyes", muscle_group_id: getMuscleGroupId("Chest") },
      { name: "Push-ups", muscle_group_id: getMuscleGroupId("Chest") },
      { name: "Cable Crossover", muscle_group_id: getMuscleGroupId("Chest") },

      // Upper Back exercises
      { name: "Barbell Rows", muscle_group_id: getMuscleGroupId("Upper Back") },
      { name: "Face Pulls", muscle_group_id: getMuscleGroupId("Upper Back") },
      {
        name: "Rear Delt Flyes",
        muscle_group_id: getMuscleGroupId("Upper Back"),
      },

      // Lats exercises
      { name: "Pull-ups", muscle_group_id: getMuscleGroupId("Lats") },
      { name: "Lat Pulldown", muscle_group_id: getMuscleGroupId("Lats") },
      { name: "Seated Cable Row", muscle_group_id: getMuscleGroupId("Lats") },
      { name: "Deadlift", muscle_group_id: getMuscleGroupId("Lats") },

      // Hamstrings exercises
      {
        name: "Romanian Deadlift",
        muscle_group_id: getMuscleGroupId("Hammys"),
      },
      { name: "Leg Curls", muscle_group_id: getMuscleGroupId("Hammys") },
      { name: "Good Mornings", muscle_group_id: getMuscleGroupId("Hammys") },

      // Quads exercises
      { name: "Squats", muscle_group_id: getMuscleGroupId("Quads") },
      { name: "Leg Press", muscle_group_id: getMuscleGroupId("Quads") },
      { name: "Lunges", muscle_group_id: getMuscleGroupId("Quads") },
      { name: "Leg Extensions", muscle_group_id: getMuscleGroupId("Quads") },

      // Calves exercises
      { name: "Calf Raises", muscle_group_id: getMuscleGroupId("Calves") },
      {
        name: "Seated Calf Raises",
        muscle_group_id: getMuscleGroupId("Calves"),
      },

      // Shoulders exercises
      {
        name: "Overhead Press",
        muscle_group_id: getMuscleGroupId("Shoulders"),
      },
      {
        name: "Lateral Raises",
        muscle_group_id: getMuscleGroupId("Shoulders"),
      },
      { name: "Arnold Press", muscle_group_id: getMuscleGroupId("Shoulders") },
      { name: "Front Raises", muscle_group_id: getMuscleGroupId("Shoulders") },

      // Biceps exercises
      { name: "Barbell Curls", muscle_group_id: getMuscleGroupId("Biceps") },
      { name: "Hammer Curls", muscle_group_id: getMuscleGroupId("Biceps") },
      { name: "Preacher Curls", muscle_group_id: getMuscleGroupId("Biceps") },

      // Triceps exercises
      { name: "Tricep Dips", muscle_group_id: getMuscleGroupId("Triceps") },
      { name: "Skull Crushers", muscle_group_id: getMuscleGroupId("Triceps") },
      {
        name: "Tricep Pushdowns",
        muscle_group_id: getMuscleGroupId("Triceps"),
      },
      {
        name: "Overhead Tricep Extension",
        muscle_group_id: getMuscleGroupId("Triceps"),
      },
    ];

    for (const exercise of initialExercises) {
      await createExercise(exercise);
    }

    console.log("Exercises seeded successfully");
  } catch (error) {
    console.error("Error seeding exercises:", error);
    throw error;
  }
}
