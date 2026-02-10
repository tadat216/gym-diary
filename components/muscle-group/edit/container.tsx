import useEditMuscleGroup from "./hooks";
import { ContainerProps } from "./types";
import View from "./view";

const Container = ({
  isEditDialogOpen,
  onClose,
  muscleGroup,
}: ContainerProps) => {
  const { updateMuscleGroupMutation, name, setName, color, setColor } =
    useEditMuscleGroup({ muscleGroup, onClose });

  return (
    <View
      isDialogOpen={isEditDialogOpen}
      onClose={onClose}
      name={name}
      setName={setName}
      color={color}
      setColor={setColor}
      updateMuscleGroupMutation={updateMuscleGroupMutation}
    />
  );
};

export default Container;
