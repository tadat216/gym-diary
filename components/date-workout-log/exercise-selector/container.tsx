import { useExerciseSelector } from "./hooks";
import type { ContainerProps } from "./types";
import View from "./view";

const Container = ({ workoutId, date }: ContainerProps) => {
  const { dialog, exercises, isLoading, onSelectExercise, isAdding } =
    useExerciseSelector({ workoutId, date });

  return (
    <View
      isDialogOpen={dialog.isOpen}
      onClose={dialog.close}
      onOpen={dialog.open}
      exercises={exercises}
      onSelectExercise={onSelectExercise}
      isAdding={isAdding}
      isLoading={isLoading}
    />
  );
};

export default Container;
