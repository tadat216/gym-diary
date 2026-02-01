export interface ViewProps {
  color: string;
  setColor: (color: string) => void;
  isDialogOpen: boolean;
  setIsDialogOpen: (isOpen: boolean) => void;
}

export interface ContainerProps {
  color: string;
  setColor: (color: string) => void;
}
