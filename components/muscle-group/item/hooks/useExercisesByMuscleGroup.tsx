import { getExercisesByMuscleGroup } from "@/db";
import { useQuery } from "@tanstack/react-query";

const useExercisesByMuscleGroup = (muscleGroupId: number) => {
  const {
    data: exercises = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["exercises", muscleGroupId],
    queryFn: () => getExercisesByMuscleGroup(muscleGroupId),
    enabled: !!muscleGroupId,
  });

  return { exercises, isLoading, error };
};

export default useExercisesByMuscleGroup;
