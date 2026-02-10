import useEditExercise from "./hooks";
import { ContainerProps } from "./types";
import View from "./view";

const Container = ({
  isEditDialogOpen,
  onClose,
  exercise,
}: ContainerProps) => {
  const { updateExerciseMutation, name, setName } = useEditExercise({
    exercise,
    onClose,
  });

  return (
    <View
      isDialogOpen={isEditDialogOpen}
      onClose={onClose}
      name={name}
      setName={setName}
      updateExerciseMutation={updateExerciseMutation}
    />
  );
};

export default Container;
