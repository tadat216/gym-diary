import useMuscleGroupList from "./hooks";
import ViewAll from "./view.all";
import ViewLoading from "./view.loading";

const Container = () => {
  const { muscleGroups, isLoadingMuscleGroups, error, addDialog } =
    useMuscleGroupList();

  if (isLoadingMuscleGroups) {
    return <ViewLoading />;
  }

  return <ViewAll muscleGroups={muscleGroups || []} addDialog={addDialog} />;
};

export default Container;
