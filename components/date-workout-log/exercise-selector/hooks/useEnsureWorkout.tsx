import { createWorkout } from "@/db";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { UseEnsureWorkoutProps, UseEnsureWorkoutReturns } from "./types";

const useEnsureWorkout = ({
  workoutId,
  date,
}: UseEnsureWorkoutProps): UseEnsureWorkoutReturns => {
  const queryClient = useQueryClient();

  const { mutateAsync: ensureWorkoutExists } = useMutation({
    mutationFn: async () => {
      if (workoutId) return workoutId;

      const newWorkout = await createWorkout({ date });
      return newWorkout.id;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["workouts", date] });
    },
  });

  return { ensureWorkoutExists };
};

export default useEnsureWorkout;
