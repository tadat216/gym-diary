import { deleteMuscleGroup } from "@/db";
import useDialog from "@/hooks/useDialog";
import useToastMutation from "@/hooks/useToastMutation";

const useDeleteMuscleGroup = (muscleGroupId: number) => {
  const deleteDialog = useDialog();

  const { mutate: deleteMuscleGroupMutation, isPending: isDeleting } =
    useToastMutation({
      mutationFn: async () => {
        await deleteMuscleGroup(muscleGroupId);
      },
      invalidateQueryKey: ["muscle-groups"],
      onSuccess: deleteDialog.close,
      successMessage: "Muscle group deleted successfully",
    });

  return { deleteDialog, deleteMuscleGroupMutation, isDeleting };
};

export default useDeleteMuscleGroup;
