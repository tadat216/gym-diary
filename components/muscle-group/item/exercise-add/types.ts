export interface ContainerProps {
  isAddDialogOpen: boolean;
  setIsAddDialogOpen: (isOpen: boolean) => void;
  muscleGroupId: number;
}

export interface HookProps {
  setIsAddDialogOpen: (isOpen: boolean) => void;
  muscleGroupId: number;
}

export interface HookReturns {
  addExerciseMutation: () => void;
  name: string;
  setName: (name: string) => void;
}

export interface ViewProps {
  isDialogOpen: boolean;
  setIsAddDialogOpen: (isOpen: boolean) => void;
  name: string;
  setName: (name: string) => void;
  addExerciseMutation: () => void;
}
