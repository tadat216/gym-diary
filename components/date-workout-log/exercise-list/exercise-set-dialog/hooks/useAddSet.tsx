import { createWorkoutExerciseDetail } from "@/db";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";

export interface UseAddSetProps {
  workoutExerciseId: number;
  onSuccess: () => void;
}

export interface UseAddSetReturns {
  addSet: (weight: number, reps: number) => Promise<void>;
  isAdding: boolean;
}

const useAddSet = ({
  workoutExerciseId,
  onSuccess,
}: UseAddSetProps): UseAddSetReturns => {
  const [isAdding, setIsAdding] = useState(false);
  const queryClient = useQueryClient();

  const addSet = async (weight: number, reps: number) => {
    try {
      setIsAdding(true);
      await createWorkoutExerciseDetail({
        workout_exercise_id: workoutExerciseId,
        weight,
        rep_count: reps,
      });
      await queryClient.invalidateQueries({
        queryKey: ["workout-exercise-sets"],
      });
      onSuccess();
    } catch (error) {
      console.error("Error adding set:", error);
    } finally {
      setIsAdding(false);
    }
  };

  return {
    addSet,
    isAdding,
  };
};

export default useAddSet;
