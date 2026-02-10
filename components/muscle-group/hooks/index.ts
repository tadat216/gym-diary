import useDialog from "@/hooks/useDialog";
import useMuscleGroups from "./useMuscleGroups";

const useMuscleGroupList = () => {
  const { muscleGroups, isLoadingMuscleGroups, error } = useMuscleGroups();
  const addDialog = useDialog();

  return {
    muscleGroups,
    isLoadingMuscleGroups,
    error,
    addDialog,
  };
};

export default useMuscleGroupList;
