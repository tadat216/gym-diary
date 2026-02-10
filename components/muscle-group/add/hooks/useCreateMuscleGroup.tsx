import { createMuscleGroup } from "@/db";
import useToastMutation from "@/hooks/useToastMutation";

interface UseCreateMuscleGroupProps {
  name: string;
  color: string;
  onSuccess: () => void;
}

const useCreateMuscleGroup = ({
  name,
  color,
  onSuccess,
}: UseCreateMuscleGroupProps) => {
  const { mutate: createMuscleGroupMutation, isPending: isCreating } =
    useToastMutation({
      mutationFn: async () => {
        await createMuscleGroup({ name, color_hex: color });
      },
      invalidateQueryKey: ["muscle-groups"],
      onSuccess,
      successMessage: "Muscle group added successfully",
    });

  return { createMuscleGroupMutation, isCreating };
};

export default useCreateMuscleGroup;
