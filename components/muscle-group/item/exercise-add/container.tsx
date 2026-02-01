import useAddExercise from "./hooks";
import { ContainerProps } from "./types";
import View from "./view";

const Container = ({
  isAddDialogOpen,
  setIsAddDialogOpen,
  muscleGroupId,
}: ContainerProps) => {
  const { addExerciseMutation, name, setName } = useAddExercise({
    setIsAddDialogOpen,
    muscleGroupId,
  });

  return (
    <View
      isDialogOpen={isAddDialogOpen}
      setIsAddDialogOpen={setIsAddDialogOpen}
      name={name}
      setName={setName}
      addExerciseMutation={addExerciseMutation}
    />
  );
};

export default Container;
