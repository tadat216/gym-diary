import { useState } from "react";
import useHooks from "./hooks";
import ViewAll from "./view.all";
import ViewLoading from "./view.loading";

const Container = () => {
  const { muscleGroups, isLoadingMuscleGroups, error } = useHooks();
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);

  if (isLoadingMuscleGroups) {
    return <ViewLoading />;
  }

  return (
    <ViewAll
      muscleGroups={muscleGroups || []}
      isAddDialogOpen={isAddDialogOpen}
      setIsAddDialogOpen={setIsAddDialogOpen}
    />
  );
};

export default Container;
