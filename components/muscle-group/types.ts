import { MuscleGroup } from "@/db";

export interface HookReturns {
  muscleGroups: MuscleGroup[] | undefined;
  isLoadingMuscleGroups: boolean;
  error: Error | null;
}

export interface ViewAllProps {
  muscleGroups: MuscleGroup[];
  isAddDialogOpen: boolean;
  setIsAddDialogOpen: (isOpen: boolean) => void;
}
