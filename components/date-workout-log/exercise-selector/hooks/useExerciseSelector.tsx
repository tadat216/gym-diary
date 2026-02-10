import useDialog from "@/hooks/useDialog";
import type {
  UseExerciseSelectorProps,
  UseExerciseSelectorReturns,
} from "./types";
import useAddToWorkout from "./useAddToWorkout";
import useAllExercises from "./useAllExercises";
import useEnsureWorkout from "./useEnsureWorkout";

const useExerciseSelector = ({
  workoutId,
  date,
}: UseExerciseSelectorProps): UseExerciseSelectorReturns => {
  const dialog = useDialog();
  const { exercises, isLoading } = useAllExercises();
  const { ensureWorkoutExists } = useEnsureWorkout({ workoutId, date });

  const { addExercise, isAdding } = useAddToWorkout({
    onSuccess: () => {
      dialog.close();
    },
    workoutId,
  });

  const handleSelectExercise = async (exerciseId: number) => {
    const resolvedWorkoutId = await ensureWorkoutExists();
    addExercise({ workoutId: resolvedWorkoutId, exerciseId });
  };

  return {
    dialog,
    exercises,
    isLoading,
    onSelectExercise: handleSelectExercise,
    isAdding,
  };
};

export default useExerciseSelector;
