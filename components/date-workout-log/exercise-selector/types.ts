import type { Exercise } from "@/db";

export interface ContainerProps {
  workoutId?: number;
  date: string;
}

export interface ViewProps {
  isDialogOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  exercises: Exercise[];
  onSelectExercise: (exerciseId: number) => void;
  isAdding: boolean;
  isLoading: boolean;
}
