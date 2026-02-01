import useHooks from "./hooks";
import View from "./view";
import { ContainerProps } from "./types";

const Container = ({
  isAddDialogOpen,
  refetchMuscleGroups,
  setIsAddDialogOpen,
}: ContainerProps) => {
  const { addMuscleGroupMutation, name, setName, color, setColor } = useHooks({
    refetchMuscleGroups,
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
