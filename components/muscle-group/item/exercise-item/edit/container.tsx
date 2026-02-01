import useEditExercise from "./hooks";
import { ContainerProps } from "./types";
import View from "./view";

const Container = ({
  isEditDialogOpen,
  setIsEditDialogOpen,
  exercise,
}: ContainerProps) => {
  const { editExerciseMutation, name, setName } = useEditExercise({
    setIsEditDialogOpen,
    exercise,
  });

  return (
    <View
      isDialogOpen={isEditDialogOpen}
      setIsEditDialogOpen={setIsEditDialogOpen}
      name={name}
      setName={setName}
      editExerciseMutation={editExerciseMutation}
    />
  );
};

export default Container;
