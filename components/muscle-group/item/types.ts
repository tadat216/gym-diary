import { Exercise, MuscleGroup } from "@/db/index";

export interface ContainerProps {
  muscleGroup: MuscleGroup;
}

export interface ViewProps {
  muscleGroup: MuscleGroup;
  exercises: Exercise[];
  isLoading: boolean;
  error: Error | null;
  expanded: boolean;
  setExpanded: (expanded: boolean) => void;
  isEditDialogOpen: boolean;
  setIsEditDialogOpen: (isOpen: boolean) => void;
  isDeleteDialogOpen: boolean;
  setIsDeleteDialogOpen: (isOpen: boolean) => void;
  deleteMuscleGroupMutation: () => void;
  isDeleting: boolean;
  isAddExerciseDialogOpen: boolean;
  setIsAddExerciseDialogOpen: (isOpen: boolean) => void;
}

export interface HookProps {
  muscleGroupId: number;
}

export interface HookReturns {
  excercises: Exercise[];
  isLoading: boolean;
  error: Error | null;
  isDeleteDialogOpen: boolean;
  setIsDeleteDialogOpen: (isOpen: boolean) => void;
  deleteMuscleGroupMutation: () => void;
  isDeleting: boolean;
}
