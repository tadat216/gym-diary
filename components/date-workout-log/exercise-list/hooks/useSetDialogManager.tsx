import type { WorkoutExerciseDetail } from "@/db";
import { useState } from "react";

export interface UseSetDialogManagerReturns {
  dialogVisible: boolean;
  openAddDialog: (workoutExerciseId: number) => void;
  openEditDialog: (
    workoutExerciseId: number,
    set: WorkoutExerciseDetail,
  ) => void;
  closeDialog: () => void;
  currentWorkoutExerciseId: number | null;
  editingSet: WorkoutExerciseDetail | null;
}

const useSetDialogManager = (): UseSetDialogManagerReturns => {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [currentWorkoutExerciseId, setCurrentWorkoutExerciseId] = useState<
    number | null
  >(null);
  const [editingSet, setEditingSet] = useState<WorkoutExerciseDetail | null>(
    null,
  );

  const openAddDialog = (workoutExerciseId: number) => {
    setCurrentWorkoutExerciseId(workoutExerciseId);
    setEditingSet(null);
    setDialogVisible(true);
  };

  const openEditDialog = (
    workoutExerciseId: number,
    set: WorkoutExerciseDetail,
  ) => {
    setCurrentWorkoutExerciseId(workoutExerciseId);
    setEditingSet(set);
    setDialogVisible(true);
  };

  const closeDialog = () => {
    setDialogVisible(false);
    setCurrentWorkoutExerciseId(null);
    setEditingSet(null);
  };

  return {
    dialogVisible,
    openAddDialog,
    openEditDialog,
    closeDialog,
    currentWorkoutExerciseId,
    editingSet,
  };
};

export default useSetDialogManager;
