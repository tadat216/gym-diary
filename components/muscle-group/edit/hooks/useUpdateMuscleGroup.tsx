import { updateMuscleGroup } from "@/db";
import useToastMutation from "@/hooks/useToastMutation";

interface UseUpdateMuscleGroupProps {
  muscleGroupId: number;
  name: string;
  color: string;
  onSuccess: () => void;
}

const useUpdateMuscleGroup = ({
  muscleGroupId,
  name,
  color,
  onSuccess,
}: UseUpdateMuscleGroupProps) => {
  const { mutate: updateMuscleGroupMutation, isPending: isUpdating } =
    useToastMutation({
      mutationFn: async () => {
        await updateMuscleGroup(muscleGroupId, { name, color_hex: color });
      },
      invalidateQueryKey: ["muscle-groups"],
      onSuccess,
      successMessage: "Muscle group updated successfully",
    });

  return { updateMuscleGroupMutation, isUpdating };
};

export default useUpdateMuscleGroup;
