import useExerciseForm from "./useExerciseForm";
import useCreateExercise from "./useCreateExercise";

interface UseAddExerciseProps {
  muscleGroupId: number;
  onClose: () => void;
}

const useAddExercise = ({ muscleGroupId, onClose }: UseAddExerciseProps) => {
  const form = useExerciseForm();
  const { createExerciseMutation, isCreating } = useCreateExercise({
    name: form.name,
    muscleGroupId,
    onSuccess: () => {
      onClose();
      form.resetForm();
    },
  });

  return {
    name: form.name,
    setName: form.setName,
    createExerciseMutation,
    isCreating,
  };
};

export default useAddExercise;
