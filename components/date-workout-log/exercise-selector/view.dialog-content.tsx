import type { Exercise } from "@/db";
import { Button } from "@rneui/themed";
import { ScrollView } from "react-native";

interface ViewDialogContentProps {
  exercises: Exercise[];
  onSelectExercise: (exerciseId: number) => void;
  isAdding: boolean;
}

const ViewDialogContent = ({
  exercises,
  onSelectExercise,
  isAdding,
}: ViewDialogContentProps) => {
  return (
    <ScrollView style={{ maxHeight: 400 }}>
      {exercises.map((exercise) => (
        <Button
          key={exercise.id}
          onPress={() => onSelectExercise(exercise.id)}
          disabled={isAdding}
          type="outline"
          style={{ marginBottom: 8 }}
        >
          {exercise.name}
        </Button>
      ))}
    </ScrollView>
  );
};

export default ViewDialogContent;
