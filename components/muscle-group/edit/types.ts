import { MuscleGroup } from "@/db";

export interface ContainerProps {
  isEditDialogOpen: boolean;
  setIsEditDialogOpen: (isOpen: boolean) => void;
  muscleGroup: MuscleGroup;
}

export interface HookProps {
  setIsEditDialogOpen: (isOpen: boolean) => void;
  muscleGroup: MuscleGroup;
}

export interface HookReturns {
  editMuscleGroupMutation: () => void;
  name: string;
  setName: (name: string) => void;
  color: string;
  setColor: (color: string) => void;
}

export interface ViewProps {
  isDialogOpen: boolean;
  setIsEditDialogOpen: (isOpen: boolean) => void;
  name: string;
  setName: (name: string) => void;
  color: string;
  setColor: (color: string) => void;
  editMuscleGroupMutation: () => void;
}
