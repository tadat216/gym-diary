import { useAddSet, useDeleteSet, useEditSet, useSetDialog } from "./hooks";
import type { ContainerProps } from "./types";
import View from "./view";

const Container = ({
  workoutExerciseId,
  visible,
  onClose,
  editingSet,
}: ContainerProps) => {
  const { weight, reps, onWeightChange, onRepsChange, resetForm } =
    useSetDialog({
      editingSet,
    });

  const handleSuccess = () => {
    resetForm();
    onClose();
  };

  const { addSet, isAdding } = useAddSet({
    workoutExerciseId,
    onSuccess: handleSuccess,
  });

  const { editSet, isEditing } = useEditSet({
    setId: editingSet?.id,
    onSuccess: handleSuccess,
  });

  const { deleteSet, isDeleting } = useDeleteSet({
    setId: editingSet?.id,
    onSuccess: handleSuccess,
  });

  const handleSubmit = async () => {
    const weightNum = parseFloat(weight);
    const repsNum = parseInt(reps, 10);

    if (isNaN(weightNum) || isNaN(repsNum)) return;

    if (editingSet) {
      await editSet(weightNum, repsNum);
    } else {
      await addSet(weightNum, repsNum);
    }
  };

  return (
    <View
      visible={visible}
      onClose={onClose}
      weight={weight}
      reps={reps}
      onWeightChange={onWeightChange}
      onRepsChange={onRepsChange}
      onSubmit={handleSubmit}
      onDelete={editingSet ? deleteSet : undefined}
      isSubmitting={isAdding || isEditing}
      isDeleting={isDeleting}
      isEditing={!!editingSet}
    />
  );
};

export default Container;
