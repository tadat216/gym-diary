import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { createMuscleGroup } from "@/db";
import { HookProps, HookReturns } from "./types";
import toast from "@/hooks/useCustomToast";

const useAddMuscleGroup = ({
  refetchMuscleGroups,
  setIsAddDialogOpen,
}: HookProps): HookReturns => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#FF0000");

  const { mutate: addMuscleGroupMutation } = useMutation({
    mutationFn: async () => {
      createMuscleGroup({ name, color_hex: color });
    },
    onSuccess: () => {
      refetchMuscleGroups();
      setIsAddDialogOpen(false);
      setName("");
      setColor("#FF0000");
      toast.success("Muscle group added successfully");
    },
    onError: (message: string) => {
      toast.error(message);
    },
  });

  return {
    addMuscleGroupMutation,
    name,
    setName,
    color,
    setColor,
  };
};

export default useAddMuscleGroup;
