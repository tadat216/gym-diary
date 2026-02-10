import { useQuery } from "@tanstack/react-query";
import { getWorkoutExercisesByWorkout } from "@/db";
import type { UseWorkoutExercisesReturns } from "./types";

const useWorkoutExercises = (
  workoutId?: number,
): UseWorkoutExercisesReturns => {
  const {
    data,
    isLoading: isLoadingExercises,
    error,
  } = useQuery({
    queryKey: ["workout-exercises", workoutId],
    queryFn: () => getWorkoutExercisesByWorkout(workoutId!),
    enabled: !!workoutId,
  });

  return {
    workoutExercises: data,
    isLoadingExercises,
    error,
  };
};

export default useWorkoutExercises;
