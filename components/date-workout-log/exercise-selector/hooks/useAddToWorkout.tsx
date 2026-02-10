import { createWorkoutExercise } from "@/db";
import toast from "@/hooks/useCustomToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { UseAddToWorkoutProps, UseAddToWorkoutReturns } from "./types";

const useAddToWorkout = ({
  onSuccess,
  workoutId,
}: UseAddToWorkoutProps): UseAddToWorkoutReturns => {
  const queryClient = useQueryClient();

  const { mutate: addExercise, isPending } = useMutation({
    mutationFn: async ({
      workoutId,
      exerciseId,
    }: {
      workoutId: number;
      exerciseId: number;
    }) => {
      await createWorkoutExercise({
        workout_id: workoutId,
        exercise_id: exerciseId,
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["workout-exercises", workoutId],
      });
      onSuccess?.();
      toast.success("Exercise added to workout");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return { addExercise, isAdding: isPending };
};

export default useAddToWorkout;
