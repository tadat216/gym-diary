import ConfirmationDialog from "@/components/common/confirmation-dialog";
import { Button, IconProps, ListItem } from "@rneui/themed";
import EditMuscleGroup from "../edit";
import AddExercise from "./exercise-add";
import ExerciseItem from "./exercise-item";
import { ViewProps } from "./types";

const _View = ({
  muscleGroup,
  exercises,
  isLoading,
  error,
  expandedDialog,
  editDialog,
  deleteDialog,
  deleteMuscleGroupMutation,
  isDeleting,
  addExerciseDialog,
}: ViewProps) => {
  return (
    <>
      <ListItem.Accordion
        content={
          <>
            <ListItem.Content>
              <ListItem.Title>{muscleGroup.name}</ListItem.Title>
            </ListItem.Content>
            <Button
              icon={
                {
                  name: "plus",
                  type: "font-awesome",
                  color: "green",
                } as IconProps
              }
              type="clear"
              size="sm"
              onPress={addExerciseDialog.open}
            ></Button>
            <Button
              icon={
                {
                  name: "pencil",
                  type: "font-awesome",
                  color: "blue",
                } as IconProps
              }
              type="clear"
              size="sm"
              onPress={editDialog.open}
            ></Button>
            <Button
              icon={
                {
                  name: "trash",
                  type: "font-awesome",
                  color: "red",
                } as IconProps
              }
              type="clear"
              size="sm"
              onPress={deleteDialog.open}
            ></Button>
          </>
        }
        isExpanded={expandedDialog.isOpen}
        onPress={expandedDialog.toggle}
        bottomDivider
      >
        {isLoading ? (
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>Loading exercises...</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ) : error ? (
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>Error loading exercises.</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ) : exercises.length === 0 ? (
          <ListItem>
            <ListItem.Content>
              <ListItem.Title>No exercises found.</ListItem.Title>
            </ListItem.Content>
          </ListItem>
        ) : (
          exercises.map((exercise) => (
            <ExerciseItem key={exercise.id} exercise={exercise} />
          ))
        )}
      </ListItem.Accordion>

      <EditMuscleGroup
        isEditDialogOpen={editDialog.isOpen}
        onClose={editDialog.close}
        muscleGroup={muscleGroup}
      />

      <AddExercise
        isAddDialogOpen={addExerciseDialog.isOpen}
        onClose={addExerciseDialog.close}
        muscleGroupId={muscleGroup.id}
      />

      <ConfirmationDialog
        isOpen={deleteDialog.isOpen}
        onClose={deleteDialog.close}
        onConfirm={deleteMuscleGroupMutation}
        title="Delete Muscle Group"
        message={`Are you sure you want to delete "${muscleGroup.name}"? This will also delete all associated exercises.`}
        confirmText="Delete"
        cancelText="Cancel"
        isLoading={isDeleting}
      />
    </>
  );
};

export default _View;
