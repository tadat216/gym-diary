export interface ContainerProps {
  isAddDialogOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export interface ViewProps {
  isDialogOpen: boolean;
  onClose: () => void;
  onOpen: () => void;
  name: string;
  setName: (name: string) => void;
  color: string;
  setColor: (color: string) => void;
  createMuscleGroupMutation: () => void;
}
