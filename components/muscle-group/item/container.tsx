import useMuscleGroupItem from "./hooks";
import { ContainerProps } from "./types";
import View from "./view";

const Container = ({ muscleGroup }: ContainerProps) => {
  const {
    exercises,
    isLoading,
    error,
    deleteDialog,
    deleteMuscleGroupMutation,
    isDeleting,
    expandedDialog,
    editDialog,
    addExerciseDialog,
  } = useMuscleGroupItem({
    muscleGroupId: muscleGroup.id,
  });

  return (
    <View
      muscleGroup={muscleGroup}
      exercises={exercises}
      isLoading={isLoading}
      error={error}
      expandedDialog={expandedDialog}
      editDialog={editDialog}
      deleteDialog={deleteDialog}
      deleteMuscleGroupMutation={deleteMuscleGroupMutation}
      isDeleting={isDeleting}
      addExerciseDialog={addExerciseDialog}
    />
  );
};

export default Container;
