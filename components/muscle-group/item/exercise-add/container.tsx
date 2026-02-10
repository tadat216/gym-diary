import useAddExercise from "./hooks";
import { ContainerProps } from "./types";
import View from "./view";

const Container = ({
  isAddDialogOpen,
  onClose,
  muscleGroupId,
}: ContainerProps) => {
  const { createExerciseMutation, name, setName } = useAddExercise({
    muscleGroupId,
    onClose,
  });

  return (
    <View
      isDialogOpen={isAddDialogOpen}
      onClose={onClose}
      name={name}
      setName={setName}
      createExerciseMutation={createExerciseMutation}
    />
  );
};

export default Container;
