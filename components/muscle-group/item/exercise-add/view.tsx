import { Button, Dialog, Input } from "@rneui/themed";
import { ViewProps } from "./types";

const _View = ({
  isDialogOpen,
  setIsAddDialogOpen,
  name,
  setName,
  addExerciseMutation,
}: ViewProps) => {
  return (
    <Dialog
      isVisible={isDialogOpen}
      onBackdropPress={() => setIsAddDialogOpen(false)}
    >
      <Dialog.Title title="Add Exercise" />
      <Input
        label="Name"
        placeholder="Enter exercise name"
        value={name}
        onChangeText={setName}
      />
      <Button onPress={() => addExerciseMutation()}>Add</Button>
    </Dialog>
  );
};

export default _View;
