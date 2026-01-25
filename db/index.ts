import { drizzle } from "drizzle-orm/expo-sqlite";
import { migrate } from "drizzle-orm/expo-sqlite/migrator";
import { openDatabaseSync } from "expo-sqlite";
import migrations from "../drizzle/migrations";

// Initialize the database connection
const expoDb = openDatabaseSync("gym-diary.db");
export const db = drizzle(expoDb);

/**
 * Initialize the database
 * - Runs migrations
 * - Seeds initial data if needed
 */
export async function initializeDatabase() {
  try {
    console.log("Running migrations...");
    await migrate(db, migrations);
    console.log("Migrations completed successfully");

    // Import and run seed function
    const { seedMuscleGroups } = await import("./queries/muscle-groups");
    await seedMuscleGroups();
  } catch (error) {
    console.error("Error initializing database:", error);
    throw error;
  }
}

// Export all query functions
export * from "./queries/muscle-groups";
