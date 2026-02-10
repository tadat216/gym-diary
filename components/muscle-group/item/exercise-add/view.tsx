import { Button, Dialog, Input } from "@rneui/themed";
import { ViewProps } from "./types";

const _View = ({
  isDialogOpen,
  onClose,
  name,
  setName,
  createExerciseMutation,
}: ViewProps) => {
  return (
    <Dialog isVisible={isDialogOpen} onBackdropPress={onClose}>
      <Dialog.Title title="Add Exercise" />
      <Input
        label="Name"
        placeholder="Enter exercise name"
        value={name}
        onChangeText={setName}
      />
      <Button onPress={() => createExerciseMutation()}>Add</Button>
    </Dialog>
  );
};

export default _View;
