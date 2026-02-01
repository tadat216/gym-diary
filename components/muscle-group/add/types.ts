export interface ContainerProps {
  isAddDialogOpen: boolean;
  setIsAddDialogOpen: (isOpen: boolean) => void;
}

export interface HookProps {
  setIsAddDialogOpen: (isOpen: boolean) => void;
}

export interface HookReturns {
  addMuscleGroupMutation: () => void;
  name: string;
  setName: (name: string) => void;
  color: string;
  setColor: (color: string) => void;
}

export interface ViewProps {
  isDialogOpen: boolean;
  setIsAddDialogOpen: (isOpen: boolean) => void;
  name: string;
  setName: (name: string) => void;
  color: string;
  setColor: (color: string) => void;
  addMuscleGroupMutation: () => void;
}
