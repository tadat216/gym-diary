import { MuscleGroup } from "@/db";
import useMuscleGroupForm from "./useMuscleGroupForm";
import useUpdateMuscleGroup from "./useUpdateMuscleGroup";

interface UseEditMuscleGroupProps {
  muscleGroup: MuscleGroup;
  onClose: () => void;
}

const useEditMuscleGroup = ({
  muscleGroup,
  onClose,
}: UseEditMuscleGroupProps) => {
  const form = useMuscleGroupForm(muscleGroup);
  const { updateMuscleGroupMutation, isUpdating } = useUpdateMuscleGroup({
    muscleGroupId: muscleGroup.id,
    name: form.name,
    color: form.color,
    onSuccess: onClose,
  });

  return {
    name: form.name,
    setName: form.setName,
    color: form.color,
    setColor: form.setColor,
    updateMuscleGroupMutation,
    isUpdating,
  };
};

export default useEditMuscleGroup;
