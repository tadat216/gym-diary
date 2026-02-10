import { MuscleGroup } from "@/db";

export interface ContainerProps {
  isEditDialogOpen: boolean;
  onClose: () => void;
  muscleGroup: MuscleGroup;
}

export interface ViewProps {
  isDialogOpen: boolean;
  onClose: () => void;
  name: string;
  setName: (name: string) => void;
  color: string;
  setColor: (color: string) => void;
  updateMuscleGroupMutation: () => void;
}
