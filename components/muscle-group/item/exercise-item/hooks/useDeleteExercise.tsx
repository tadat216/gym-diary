import { deleteExercise } from "@/db";
import useDialog from "@/hooks/useDialog";
import useToastMutation from "@/hooks/useToastMutation";

interface UseDeleteExerciseProps {
  exerciseId: number;
  muscleGroupId: number;
}

const useDeleteExercise = ({
  exerciseId,
  muscleGroupId,
}: UseDeleteExerciseProps) => {
  const deleteDialog = useDialog();

  const { mutate: deleteExerciseMutation, isPending: isDeleting } =
    useToastMutation({
      mutationFn: async () => {
        await deleteExercise(exerciseId);
      },
      invalidateQueryKey: ["exercises", muscleGroupId],
      onSuccess: deleteDialog.close,
      successMessage: "Exercise deleted successfully",
    });

  return { deleteDialog, deleteExerciseMutation, isDeleting };
};

export default useDeleteExercise;
