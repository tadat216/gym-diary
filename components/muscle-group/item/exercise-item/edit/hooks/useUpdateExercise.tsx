import { updateExercise } from "@/db";
import useToastMutation from "@/hooks/useToastMutation";

interface UseUpdateExerciseProps {
  exerciseId: number;
  muscleGroupId: number;
  name: string;
  onSuccess: () => void;
}

const useUpdateExercise = ({
  exerciseId,
  muscleGroupId,
  name,
  onSuccess,
}: UseUpdateExerciseProps) => {
  const { mutate: updateExerciseMutation, isPending: isUpdating } =
    useToastMutation({
      mutationFn: async () => {
        await updateExercise(exerciseId, { name });
      },
      invalidateQueryKey: ["exercises", muscleGroupId],
      onSuccess,
      successMessage: "Exercise updated successfully",
    });

  return { updateExerciseMutation, isUpdating };
};

export default useUpdateExercise;
