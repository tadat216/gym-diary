import { useExerciseList, useSetDialogManager } from "./hooks";
import type { ContainerProps } from "./types";
import View from "./view";
import ViewEmpty from "./view.empty";

const Container = ({ workoutExercises, workoutId }: ContainerProps) => {
  const { workoutExercisesWithDetails, onDeleteExercise, isDeleting } =
    useExerciseList({ workoutExercises, workoutId });

  const {
    dialogVisible,
    openAddDialog,
    openEditDialog,
    closeDialog,
    currentWorkoutExerciseId,
    editingSet,
  } = useSetDialogManager();

  if (
    !workoutExercisesWithDetails ||
    workoutExercisesWithDetails.length === 0
  ) {
    return <ViewEmpty />;
  }

  return (
    <View
      workoutExercisesWithDetails={workoutExercisesWithDetails}
      onDeleteExercise={onDeleteExercise}
      isDeleting={isDeleting}
      onAddSet={openAddDialog}
      onEditSet={openEditDialog}
      dialogVisible={dialogVisible}
      closeDialog={closeDialog}
      currentWorkoutExerciseId={currentWorkoutExerciseId}
      editingSet={editingSet}
    />
  );
};

export default Container;
