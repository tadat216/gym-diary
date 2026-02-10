import { useGetParams, useWorkoutExercises, useWorkoutForDate } from "./hooks";
import View from "./view";
import ViewLoading from "./view.loading";

const Container = () => {
  const { date } = useGetParams();
  const { workout, isLoadingWorkout } = useWorkoutForDate(date);
  const { workoutExercises, isLoadingExercises } = useWorkoutExercises(
    workout?.id,
  );

  if (isLoadingWorkout || isLoadingExercises) {
    return <ViewLoading />;
  }

  return (
    <View date={date} workout={workout} workoutExercises={workoutExercises} />
  );
};

export default Container;
