import { deleteWorkoutExercise } from "@/db";
import toast from "@/hooks/useCustomToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { UseDeleteExerciseProps, UseDeleteExerciseReturns } from "./types";

const useDeleteExercise = ({
  workoutId,
}: UseDeleteExerciseProps): UseDeleteExerciseReturns => {
  const queryClient = useQueryClient();

  const { mutate: deleteExercise, isPending } = useMutation({
    mutationFn: async (id: number) => {
      await deleteWorkoutExercise(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["workout-exercises", workoutId],
      });
      toast.success("Exercise removed from workout");
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });

  return { deleteExercise, isDeleting: isPending };
};

export default useDeleteExercise;
