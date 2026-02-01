import { createExercise } from "@/db";
import toast from "@/hooks/useCustomToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { HookProps, HookReturns } from "./types";

const useAddExercise = ({
  setIsAddDialogOpen,
  muscleGroupId,
}: HookProps): HookReturns => {
  const queryClient = useQueryClient();
  const [name, setName] = useState("");

  const { mutate: addExerciseMutation } = useMutation({
    mutationFn: async () => {
      createExercise({ name, muscle_group_id: muscleGroupId });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["exercises", muscleGroupId] });
      setIsAddDialogOpen(false);
      setName("");
      toast.success("Exercise added successfully");
    },
    onError: (message: string) => {
      toast.error(message);
    },
  });

  return {
    addExerciseMutation,
    name,
    setName,
  };
};

export default useAddExercise;
