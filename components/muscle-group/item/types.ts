import { Exercise, MuscleGroup } from "@/db/index";
import { UseDialogReturn } from "@/hooks/useDialog";

export interface ContainerProps {
  muscleGroup: MuscleGroup;
}

export interface ViewProps {
  muscleGroup: MuscleGroup;
  exercises: Exercise[];
  isLoading: boolean;
  error: Error | null;
  expandedDialog: UseDialogReturn;
  editDialog: UseDialogReturn;
  deleteDialog: UseDialogReturn;
  deleteMuscleGroupMutation: () => void;
  isDeleting: boolean;
  addExerciseDialog: UseDialogReturn;
}
