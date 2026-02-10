import useDialog from "@/hooks/useDialog";

const useMuscleGroupItemDialogs = () => {
  const expandedDialog = useDialog();
  const editDialog = useDialog();
  const addExerciseDialog = useDialog();

  return {
    expandedDialog,
    editDialog,
    addExerciseDialog,
  };
};

export default useMuscleGroupItemDialogs;
