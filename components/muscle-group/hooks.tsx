import { getAllMuscleGroups } from "@/db";
import { useQuery } from "@tanstack/react-query";
import { HookReturns } from "./types";

const useHooks = (): HookReturns => {
  const {
    data: muscleGroups,
    isLoading: isLoadingMuscleGroups,
    refetch: refetchMuscleGroups,
    error,
  } = useQuery({
    queryKey: ["muscle-groups"],
    queryFn: getAllMuscleGroups,
  });

  return { muscleGroups, isLoadingMuscleGroups, refetchMuscleGroups, error };
};

export default useHooks;
