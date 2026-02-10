import useAddMuscleGroup from "./hooks";
import { ContainerProps } from "./types";
import View from "./view";

const Container = ({ isAddDialogOpen, onClose, onOpen }: ContainerProps) => {
  const { createMuscleGroupMutation, name, setName, color, setColor } =
    useAddMuscleGroup({ onClose });

  return (
    <View
      isDialogOpen={isAddDialogOpen}
      onClose={onClose}
      onOpen={onOpen}
      name={name}
      setName={setName}
      color={color}
      setColor={setColor}
      createMuscleGroupMutation={createMuscleGroupMutation}
    />
  );
};

export default Container;
