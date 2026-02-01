import { createMuscleGroup } from "@/db";
import toast from "@/hooks/useCustomToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { HookProps, HookReturns } from "./types";

const useAddMuscleGroup = ({ setIsAddDialogOpen }: HookProps): HookReturns => {
  const queryClient = useQueryClient();
  const [name, setName] = useState("");
  const [color, setColor] = useState("#FF0000");

  const { mutate: addMuscleGroupMutation } = useMutation({
    mutationFn: async () => {
      createMuscleGroup({ name, color_hex: color });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["muscle-groups"] });
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
