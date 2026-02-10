import { Exercise } from "@/db";

export interface ContainerProps {
  isEditDialogOpen: boolean;
  onClose: () => void;
  exercise: Exercise;
}

export interface ViewProps {
  isDialogOpen: boolean;
  onClose: () => void;
  name: string;
  setName: (name: string) => void;
  updateExerciseMutation: () => void;
}
