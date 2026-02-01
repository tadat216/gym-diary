import { useState } from "react";
import useHook from "./hooks";
import { ContainerProps } from "./types";
import View from "./view";

const Container = ({ muscleGroup }: ContainerProps) => {
  const {
    excercises,
    isLoading,
    error,
    isDeleteDialogOpen,
    setIsDeleteDialogOpen,
    deleteMuscleGroupMutation,
    isDeleting,
  } = useHook({
    muscleGroupId: muscleGroup.id,
  });
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [isAddExerciseDialogOpen, setIsAddExerciseDialogOpen] = useState(false);

  return (
    <View
      muscleGroup={muscleGroup}
      exercises={excercises}
      isLoading={isLoading}
      error={error}
      expanded={isExpanded}
      setExpanded={setIsExpanded}
      isEditDialogOpen={isEditDialogOpen}
      setIsEditDialogOpen={setIsEditDialogOpen}
      isDeleteDialogOpen={isDeleteDialogOpen}
      setIsDeleteDialogOpen={setIsDeleteDialogOpen}
      deleteMuscleGroupMutation={deleteMuscleGroupMutation}
      isDeleting={isDeleting}
      isAddExerciseDialogOpen={isAddExerciseDialogOpen}
      setIsAddExerciseDialogOpen={setIsAddExerciseDialogOpen}
    />
  );
};

export default Container;
