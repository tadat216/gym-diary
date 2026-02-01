import { deleteExercise } from "@/db";
import toast from "@/hooks/useCustomToast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { HookProps, HookReturns } from "./types";

const useHook = ({ exercise }: HookProps): HookReturns => {
  const queryClient = useQueryClient();
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const { mutate: deleteExerciseMutation, isPending: isDeleting } = useMutation(
    {
      mutationFn: async () => {
        await deleteExercise(exercise.id);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ["exercises", exercise.muscle_group_id],
        });
        setIsDeleteDialogOpen(false);
        toast.success("Exercise deleted successfully");
      },
      onError: (message: string) => {
        toast.error(message);
      },
    },
  );

  return {
    isEditDialogOpen,
    setIsEditDialogOpen,
    isDeleteDialogOpen,
    setIsDeleteDialogOpen,
    deleteExerciseMutation,
    isDeleting,
  };
};

export default useHook;
