import { getAllMuscleGroups } from "@/db";
import { useQuery } from "@tanstack/react-query";
import { HookReturns } from "./types";

const useHooks = (): HookReturns => {
  const {
    data: muscleGroups,
    isLoading: isLoadingMuscleGroups,
    error,
  } = useQuery({
    queryKey: ["muscle-groups"],
    queryFn: getAllMuscleGroups,
  });

  return { muscleGroups, isLoadingMuscleGroups, error };
};

export default useHooks;
