import { updateWorkoutExerciseDetail } from "@/db";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export interface UseEditSetProps {
  setId?: number;
  onSuccess: () => void;
}

export interface UseEditSetReturns {
  editSet: (weight: number, reps: number) => Promise<void>;
  isEditing: boolean;
}

const useEditSet = ({
  setId,
  onSuccess,
}: UseEditSetProps): UseEditSetReturns => {
  const [isEditing, setIsEditing] = useState(false);
  const queryClient = useQueryClient();

  const editSet = async (weight: number, reps: number) => {
    if (!setId) return;

    try {
      setIsEditing(true);
      await updateWorkoutExerciseDetail(setId, {
        weight,
        rep_count: reps,
      });
      await queryClient.invalidateQueries({
        queryKey: ["workout-exercise-sets"],
      });
      onSuccess();
    } catch (error) {
      console.error("Error editing set:", error);
    } finally {
      setIsEditing(false);
    }
  };

  return {
    editSet,
    isEditing,
  };
};

export default useEditSet;
