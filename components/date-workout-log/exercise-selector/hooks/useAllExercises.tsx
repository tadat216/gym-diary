import { getAllExercises } from "@/db";
import { useQuery } from "@tanstack/react-query";
import type { UseAllExercisesReturns } from "./types";

const useAllExercises = (): UseAllExercisesReturns => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["exercises"],
    queryFn: getAllExercises,
  });

  return {
    exercises: data || [],
    isLoading,
    error,
  };
};

export default useAllExercises;
