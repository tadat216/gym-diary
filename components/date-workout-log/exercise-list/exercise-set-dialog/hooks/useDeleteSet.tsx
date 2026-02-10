import { deleteWorkoutExerciseDetail } from "@/db";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export interface UseDeleteSetProps {
  setId?: number;
  onSuccess: () => void;
}

export interface UseDeleteSetReturns {
  deleteSet: () => Promise<void>;
  isDeleting: boolean;
}

const useDeleteSet = ({
  setId,
  onSuccess,
}: UseDeleteSetProps): UseDeleteSetReturns => {
  const [isDeleting, setIsDeleting] = useState(false);
  const queryClient = useQueryClient();

  const deleteSet = async () => {
    if (!setId) return;

    try {
      setIsDeleting(true);
      await deleteWorkoutExerciseDetail(setId);
      await queryClient.invalidateQueries({
        queryKey: ["workout-exercise-sets"],
      });
      onSuccess();
    } catch (error) {
      console.error("Error deleting set:", error);
    } finally {
      setIsDeleting(false);
    }
  };

  return {
    deleteSet,
    isDeleting,
  };
};

export default useDeleteSet;
