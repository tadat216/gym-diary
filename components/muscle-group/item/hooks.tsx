import { deleteMuscleGroup, getExercisesByMuscleGroup } from "@/db";
import toast from "@/hooks/useCustomToast";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { HookProps, HookReturns } from "./types";

const useHook = ({ muscleGroupId }: HookProps): HookReturns => {
  const queryClient = useQueryClient();
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

  const {
    data: excercises = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["exercises", muscleGroupId],
    queryFn: () => getExercisesByMuscleGroup(muscleGroupId),
    enabled: !!muscleGroupId,
  });

  const { mutate: deleteMuscleGroupMutation, isPending: isDeleting } =
    useMutation({
      mutationFn: async () => {
        await deleteMuscleGroup(muscleGroupId);
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["muscle-groups"] });
        setIsDeleteDialogOpen(false);
        toast.success("Muscle group deleted successfully");
      },
      onError: (message: string) => {
        toast.error(message);
      },
    });

  return {
    excercises,
    isLoading,
    error,
    isDeleteDialogOpen,
    setIsDeleteDialogOpen,
    deleteMuscleGroupMutation,
    isDeleting,
  };
};

export default useHook;
