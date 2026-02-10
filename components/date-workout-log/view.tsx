import { Text, View } from "react-native";
import ExerciseList from "./exercise-list";
import ExerciseSelector from "./exercise-selector";
import { _ViewProps } from "./types";

const _View = ({ date, workout, workoutExercises }: _ViewProps) => {
  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 16 }}>
        Workout for: {date}
      </Text>
      <ExerciseSelector workoutId={workout?.id} date={date} />
      <ExerciseList
        workoutExercises={workoutExercises}
        workoutId={workout?.id}
      />
    </View>
  );
};

export default _View;
