export interface ContainerProps {
  isAddDialogOpen: boolean;
  onClose: () => void;
  muscleGroupId: number;
}

export interface ViewProps {
  isDialogOpen: boolean;
  onClose: () => void;
  name: string;
  setName: (name: string) => void;
  createExerciseMutation: () => void;
}
