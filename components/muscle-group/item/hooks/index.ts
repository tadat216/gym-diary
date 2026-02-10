import useExercisesByMuscleGroup from "./useExercisesByMuscleGroup";
import useDeleteMuscleGroup from "./useDeleteMuscleGroup";
import useMuscleGroupItemDialogs from "./useMuscleGroupItemDialogs";

interface UseMuscleGroupItemProps {
  muscleGroupId: number;
}

const useMuscleGroupItem = ({ muscleGroupId }: UseMuscleGroupItemProps) => {
  const { exercises, isLoading, error } =
    useExercisesByMuscleGroup(muscleGroupId);
  const { deleteDialog, deleteMuscleGroupMutation, isDeleting } =
    useDeleteMuscleGroup(muscleGroupId);
  const { expandedDialog, editDialog, addExerciseDialog } =
    useMuscleGroupItemDialogs();

  return {
    exercises,
    isLoading,
    error,
    deleteDialog,
    deleteMuscleGroupMutation,
    isDeleting,
    expandedDialog,
    editDialog,
    addExerciseDialog,
  };
};

export default useMuscleGroupItem;
