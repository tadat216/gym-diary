import ConfirmationDialog from "@/components/common/confirmation-dialog";
import { Button, IconProps, ListItem } from "@rneui/themed";
import EditExercise from "./edit";
import { ViewProps } from "./types";

const _View = ({
  exercise,
  editDialog,
  deleteDialog,
  deleteExerciseMutation,
  isDeleting,
}: ViewProps) => {
  return (
    <>
      <ListItem bottomDivider>
        <ListItem.Content>
          <ListItem.Title>{exercise.name}</ListItem.Title>
        </ListItem.Content>
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
        />
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
        />
      </ListItem>

      <EditExercise
        isEditDialogOpen={editDialog.isOpen}
        onClose={editDialog.close}
        exercise={exercise}
      />

      <ConfirmationDialog
        isOpen={deleteDialog.isOpen}
        onClose={deleteDialog.close}
        onConfirm={deleteExerciseMutation}
        title="Delete Exercise"
        message={`Are you sure you want to delete "${exercise.name}"?`}
        confirmText="Delete"
        cancelText="Cancel"
        isLoading={isDeleting}
      />
    </>
  );
};

export default _View;
