import { Button, Dialog, Input } from "@rneui/themed";
import { ViewProps } from "./types";

const _View = ({
  isDialogOpen,
  setIsEditDialogOpen,
  name,
  setName,
  editExerciseMutation,
}: ViewProps) => {
  return (
    <Dialog
      isVisible={isDialogOpen}
      onBackdropPress={() => setIsEditDialogOpen(false)}
    >
      <Dialog.Title title="Edit Exercise" />
      <Input
        label="Name"
        placeholder="Enter exercise name"
        value={name}
        onChangeText={setName}
      />
      <Button onPress={() => editExerciseMutation()}>Update</Button>
    </Dialog>
  );
};

export default _View;
