import { Exercise } from "@/db";
import useExerciseForm from "./useExerciseForm";
import useUpdateExercise from "./useUpdateExercise";

interface UseEditExerciseProps {
  exercise: Exercise;
  onClose: () => void;
}

const useEditExercise = ({ exercise, onClose }: UseEditExerciseProps) => {
  const form = useExerciseForm(exercise);
  const { updateExerciseMutation, isUpdating } = useUpdateExercise({
    exerciseId: exercise.id,
    muscleGroupId: exercise.muscle_group_id,
    name: form.name,
    onSuccess: onClose,
  });

  return {
    name: form.name,
    setName: form.setName,
    updateExerciseMutation,
    isUpdating,
  };
};

export default useEditExercise;
