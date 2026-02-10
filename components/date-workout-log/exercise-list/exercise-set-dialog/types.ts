import type { WorkoutExerciseDetail } from "@/db";

export interface ContainerProps {
  workoutExerciseId: number;
  visible: boolean;
  onClose: () => void;
  editingSet?: WorkoutExerciseDetail | null;
}

export interface ViewProps {
  visible: boolean;
  onClose: () => void;
  weight: string;
  reps: string;
  onWeightChange: (value: string) => void;
  onRepsChange: (value: string) => void;
  onSubmit: () => void;
  onDelete?: () => void;
  isSubmitting: boolean;
  isDeleting: boolean;
  isEditing: boolean;
}
