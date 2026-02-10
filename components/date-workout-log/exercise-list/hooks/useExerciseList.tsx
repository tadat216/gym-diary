import {
  getAllExercises,
  getWorkoutExerciseDetailsByWorkoutExercise,
} from "@/db";
import { useQuery } from "@tanstack/react-query";
import type { UseExerciseListProps, UseExerciseListReturns } from "./types";
import useDeleteExercise from "./useDeleteExercise";

const useExerciseList = ({
  workoutExercises,
  workoutId,
}: UseExerciseListProps): UseExerciseListReturns => {
  const { deleteExercise, isDeleting } = useDeleteExercise({ workoutId });

  // Fetch all exercises to enrich workout exercises with details
  const { data: allExercises } = useQuery({
    queryKey: ["exercises"],
    queryFn: getAllExercises,
  });

  // Fetch sets for all workout exercises
  const workoutExerciseIds = workoutExercises?.map((we) => we.id) || [];

  const { data: allSets } = useQuery({
    queryKey: ["workout-exercise-sets", workoutExerciseIds],
    queryFn: async () => {
      const setsPromises = workoutExerciseIds.map((id) =>
        getWorkoutExerciseDetailsByWorkoutExercise(id),
      );
      const setsArrays = await Promise.all(setsPromises);
      // Flatten and create a map of workout_exercise_id -> sets
      const setsMap = new Map();
      setsArrays.forEach((sets, index) => {
        setsMap.set(workoutExerciseIds[index], sets);
      });
      return setsMap;
    },
    enabled: workoutExerciseIds.length > 0,
  });

  // Client-side join: match workout exercises with exercise details and sets
  const workoutExercisesWithDetails =
    workoutExercises?.map((we) => {
      const exercise = allExercises?.find((ex) => ex.id === we.exercise_id);
      const sets = allSets?.get(we.id) || [];
      return {
        ...we,
        exercise: exercise!,
        sets,
      };
    }) || [];

  return {
    workoutExercisesWithDetails,
    onDeleteExercise: deleteExercise,
    isDeleting,
  };
};

export default useExerciseList;
