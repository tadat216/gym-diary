import useExerciseItem from "./hooks";
import { ContainerProps } from "./types";
import View from "./view";

const Container = ({ exercise }: ContainerProps) => {
  const { editDialog, deleteDialog, deleteExerciseMutation, isDeleting } =
    useExerciseItem({ exercise });

  return (
    <View
      exercise={exercise}
      editDialog={editDialog}
      deleteDialog={deleteDialog}
      deleteExerciseMutation={deleteExerciseMutation}
      isDeleting={isDeleting}
    />
  );
};

export default Container;
