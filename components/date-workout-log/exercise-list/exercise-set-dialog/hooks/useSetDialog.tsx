import type { WorkoutExerciseDetail } from "@/db";
import { useEffect, useState } from "react";

export interface UseSetDialogProps {
  editingSet?: WorkoutExerciseDetail | null;
}

export interface UseSetDialogReturns {
  weight: string;
  reps: string;
  onWeightChange: (value: string) => void;
  onRepsChange: (value: string) => void;
  resetForm: () => void;
}

const useSetDialog = ({
  editingSet,
}: UseSetDialogProps): UseSetDialogReturns => {
  const [weight, setWeight] = useState("");
  const [reps, setReps] = useState("");

  useEffect(() => {
    if (editingSet) {
      setWeight(editingSet.weight.toString());
      setReps(editingSet.rep_count.toString());
    } else {
      setWeight("");
      setReps("");
    }
  }, [editingSet]);

  const resetForm = () => {
    setWeight("");
    setReps("");
  };

  return {
    weight,
    reps,
    onWeightChange: setWeight,
    onRepsChange: setReps,
    resetForm,
  };
};

export default useSetDialog;
