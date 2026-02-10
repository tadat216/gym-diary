import useMuscleGroupForm from "./useMuscleGroupForm";
import useCreateMuscleGroup from "./useCreateMuscleGroup";

interface UseAddMuscleGroupProps {
  onClose: () => void;
}

const useAddMuscleGroup = ({ onClose }: UseAddMuscleGroupProps) => {
  const form = useMuscleGroupForm();
  const { createMuscleGroupMutation, isCreating } = useCreateMuscleGroup({
    name: form.name,
    color: form.color,
    onSuccess: () => {
      onClose();
      form.resetForm();
    },
  });

  return {
    name: form.name,
    setName: form.setName,
    color: form.color,
    setColor: form.setColor,
    createMuscleGroupMutation,
    isCreating,
  };
};

export default useAddMuscleGroup;
