import { Exercise } from "@/db";
import useDialog from "@/hooks/useDialog";
import useDeleteExercise from "./useDeleteExercise";

interface UseExerciseItemProps {
  exercise: Exercise;
}

const useExerciseItem = ({ exercise }: UseExerciseItemProps) => {
  const editDialog = useDialog();
  const { deleteDialog, deleteExerciseMutation, isDeleting } =
    useDeleteExercise({
      exerciseId: exercise.id,
      muscleGroupId: exercise.muscle_group_id,
    });

  return {
    editDialog,
    deleteDialog,
    deleteExerciseMutation,
    isDeleting,
  };
};

export default useExerciseItem;
