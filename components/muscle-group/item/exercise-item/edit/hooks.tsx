import { updateExercise } from "@/db";
import toast from "@/hooks/useCustomToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { HookProps, HookReturns } from "./types";

const useEditExercise = ({
  setIsEditDialogOpen,
  exercise,
}: HookProps): HookReturns => {
  const queryClient = useQueryClient();
  const [name, setName] = useState(exercise.name);

  // Update form when exercise changes
  useEffect(() => {
    setName(exercise.name);
  }, [exercise]);

  const { mutate: editExerciseMutation } = useMutation({
    mutationFn: async () => {
      await updateExercise(exercise.id, { name });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["exercises", exercise.muscle_group_id],
      });
      setIsEditDialogOpen(false);
      toast.success("Exercise updated successfully");
    },
    onError: (message: string) => {
      toast.error(message);
    },
  });

  return {
    editExerciseMutation,
    name,
    setName,
  };
};

export default useEditExercise;
