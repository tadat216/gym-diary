import { Exercise } from "@/db";

export interface ContainerProps {
  exercise: Exercise;
}

export interface HookProps {
  exercise: Exercise;
}

export interface HookReturns {
  isEditDialogOpen: boolean;
  setIsEditDialogOpen: (isOpen: boolean) => void;
  isDeleteDialogOpen: boolean;
  setIsDeleteDialogOpen: (isOpen: boolean) => void;
  deleteExerciseMutation: () => void;
  isDeleting: boolean;
}

export interface ViewProps {
  exercise: Exercise;
  isEditDialogOpen: boolean;
  setIsEditDialogOpen: (isOpen: boolean) => void;
  isDeleteDialogOpen: boolean;
  setIsDeleteDialogOpen: (isOpen: boolean) => void;
  deleteExerciseMutation: () => void;
  isDeleting: boolean;
}
