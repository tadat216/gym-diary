import useHook from "./hooks";
import { ContainerProps } from "./types";
import View from "./view";

const Container = ({ exercise }: ContainerProps) => {
  const {
    isEditDialogOpen,
    setIsEditDialogOpen,
    isDeleteDialogOpen,
    setIsDeleteDialogOpen,
    deleteExerciseMutation,
    isDeleting,
  } = useHook({ exercise });

  return (
    <View
      exercise={exercise}
      isEditDialogOpen={isEditDialogOpen}
      setIsEditDialogOpen={setIsEditDialogOpen}
      isDeleteDialogOpen={isDeleteDialogOpen}
      setIsDeleteDialogOpen={setIsDeleteDialogOpen}
      deleteExerciseMutation={deleteExerciseMutation}
      isDeleting={isDeleting}
    />
  );
};

export default Container;
