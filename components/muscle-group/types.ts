import { MuscleGroup } from "@/db";
import { UseDialogReturn } from "@/hooks/useDialog";

export interface ViewAllProps {
  muscleGroups: MuscleGroup[];
  addDialog: UseDialogReturn;
}
