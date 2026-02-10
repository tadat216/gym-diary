import { Button, IconProps, ListItem } from "@rneui/themed";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import ExerciseSetDialog from "./exercise-set-dialog";
import type { ViewProps } from "./types";

const _View = ({
  workoutExercisesWithDetails,
  onDeleteExercise,
  isDeleting,
  onAddSet,
  onEditSet,
  dialogVisible,
  closeDialog,
  currentWorkoutExerciseId,
  editingSet,
}: ViewProps) => {
  return (
    <ScrollView style={{ flex: 1, marginTop: 16 }}>
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 8 }}>
        Exercises in Workout
      </Text>
      {workoutExercisesWithDetails.map((we) => (
        <ListItem key={we.id} bottomDivider>
          <ListItem.Content>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: "100%",
              }}
            >
              <View style={{ flex: 1 }}>
                <ListItem.Title>
                  {we.exercise?.name || "Unknown Exercise"}
                </ListItem.Title>
                {we.sets && we.sets.length > 0 && (
                  <View style={{ marginTop: 8, gap: 4 }}>
                    {we.sets.map((set, index) => (
                      <TouchableOpacity
                        key={set.id}
                        onPress={() => onEditSet(we.id, set)}
                        style={{
                          flexDirection: "row",
                          gap: 8,
                          paddingVertical: 4,
                        }}
                      >
                        <Text style={{ color: "#666" }}>
                          Set {index + 1}: {set.weight}kg x {set.rep_count} reps
                        </Text>
                      </TouchableOpacity>
                    ))}
                  </View>
                )}
              </View>
              <View
                style={{ flexDirection: "row", gap: 8, alignItems: "center" }}
              >
                <Button
                  icon={
                    {
                      name: "add-circle-outline",
                      type: "ionicon",
                      color: "#2089dc",
                      size: 24,
                    } as IconProps
                  }
                  type="clear"
                  onPress={() => onAddSet(we.id)}
                />
                <Button
                  title="Delete"
                  onPress={() => onDeleteExercise(we.id)}
                  disabled={isDeleting}
                  color="error"
                  size="sm"
                />
              </View>
            </View>
          </ListItem.Content>
        </ListItem>
      ))}
      {dialogVisible && currentWorkoutExerciseId && (
        <ExerciseSetDialog
          workoutExerciseId={currentWorkoutExerciseId}
          visible={dialogVisible}
          onClose={closeDialog}
          editingSet={editingSet}
        />
      )}
    </ScrollView>
  );
};

export default _View;
