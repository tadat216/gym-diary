import { getWorkoutsByDate } from "@/db";
import { useQuery } from "@tanstack/react-query";
import type { UseWorkoutForDateReturns } from "./types";

const useWorkoutForDate = (date: string): UseWorkoutForDateReturns => {
  const {
    data,
    isLoading: isLoadingWorkout,
    error,
  } = useQuery({
    queryKey: ["workouts", date],
    queryFn: async () => {
      const workouts = await getWorkoutsByDate(date);
      return workouts[0] ?? null; // Return null instead of undefined when no workout exists
    },
    enabled: !!date,
  });

  return {
    workout: data,
    isLoadingWorkout,
    error,
  };
};

export default useWorkoutForDate;
