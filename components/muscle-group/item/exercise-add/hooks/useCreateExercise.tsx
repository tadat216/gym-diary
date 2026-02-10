import { createExercise } from "@/db";
import useToastMutation from "@/hooks/useToastMutation";

interface UseCreateExerciseProps {
  name: string;
  muscleGroupId: number;
  onSuccess: () => void;
}

const useCreateExercise = ({
  name,
  muscleGroupId,
  onSuccess,
}: UseCreateExerciseProps) => {
  const { mutate: createExerciseMutation, isPending: isCreating } =
    useToastMutation({
      mutationFn: async () => {
        await createExercise({ name, muscle_group_id: muscleGroupId });
      },
      invalidateQueryKey: ["exercises", muscleGroupId],
      onSuccess,
      successMessage: "Exercise added successfully",
    });

  return { createExerciseMutation, isCreating };
};

export default useCreateExercise;
