import useEditMuscleGroup from "./hooks";
import { ContainerProps } from "./types";
import View from "./view";

const Container = ({
  isEditDialogOpen,
  setIsEditDialogOpen,
  muscleGroup,
}: ContainerProps) => {
  const { editMuscleGroupMutation, name, setName, color, setColor } =
    useEditMuscleGroup({
      setIsEditDialogOpen,
      muscleGroup,
    });

  return (
    <View
      isDialogOpen={isEditDialogOpen}
      setIsEditDialogOpen={setIsEditDialogOpen}
      name={name}
      setName={setName}
      color={color}
      setColor={setColor}
      editMuscleGroupMutation={editMuscleGroupMutation}
    />
  );
};

export default Container;
