import useAddMuscleGroup from "./hooks";
import { ContainerProps } from "./types";
import View from "./view";

const Container = ({ isAddDialogOpen, setIsAddDialogOpen }: ContainerProps) => {
  const { addMuscleGroupMutation, name, setName, color, setColor } =
    useAddMuscleGroup({
      setIsAddDialogOpen,
    });

  return (
    <View
      isDialogOpen={isAddDialogOpen}
      setIsAddDialogOpen={setIsAddDialogOpen}
      name={name}
      setName={setName}
      color={color}
      setColor={setColor}
      addMuscleGroupMutation={addMuscleGroupMutation}
    />
  );
};

export default Container;
