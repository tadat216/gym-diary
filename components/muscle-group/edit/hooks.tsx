import { updateMuscleGroup } from "@/db";
import toast from "@/hooks/useCustomToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { HookProps, HookReturns } from "./types";

const useEditMuscleGroup = ({
  setIsEditDialogOpen,
  muscleGroup,
}: HookProps): HookReturns => {
  const queryClient = useQueryClient();
  const [name, setName] = useState(muscleGroup.name);
  const [color, setColor] = useState(muscleGroup.color_hex);

  // Update form when muscleGroup changes
  useEffect(() => {
    setName(muscleGroup.name);
    setColor(muscleGroup.color_hex);
  }, [muscleGroup]);

  const { mutate: editMuscleGroupMutation } = useMutation({
    mutationFn: async () => {
      await updateMuscleGroup(muscleGroup.id, { name, color_hex: color });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["muscle-groups"] });
      setIsEditDialogOpen(false);
      toast.success("Muscle group updated successfully");
    },
    onError: (message: string) => {
      toast.error(message);
    },
  });

  return {
    editMuscleGroupMutation,
    name,
    setName,
    color,
    setColor,
  };
};

export default useEditMuscleGroup;
