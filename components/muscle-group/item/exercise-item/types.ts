import { Exercise } from "@/db";
import { UseDialogReturn } from "@/hooks/useDialog";

export interface ContainerProps {
  exercise: Exercise;
}

export interface ViewProps {
  exercise: Exercise;
  editDialog: UseDialogReturn;
  deleteDialog: UseDialogReturn;
  deleteExerciseMutation: () => void;
  isDeleting: boolean;
}
