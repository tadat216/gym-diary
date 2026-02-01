import { Exercise } from "@/db";

export interface ContainerProps {
  isEditDialogOpen: boolean;
  setIsEditDialogOpen: (isOpen: boolean) => void;
  exercise: Exercise;
}

export interface HookProps {
  setIsEditDialogOpen: (isOpen: boolean) => void;
  exercise: Exercise;
}

export interface HookReturns {
  editExerciseMutation: () => void;
  name: string;
  setName: (name: string) => void;
}

export interface ViewProps {
  isDialogOpen: boolean;
  setIsEditDialogOpen: (isOpen: boolean) => void;
  name: string;
  setName: (name: string) => void;
  editExerciseMutation: () => void;
}
