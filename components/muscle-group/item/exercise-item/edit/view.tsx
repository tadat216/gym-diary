import { Button, Dialog, Input } from "@rneui/themed";
import { ViewProps } from "./types";

const _View = ({
  isDialogOpen,
  onClose,
  name,
  setName,
  updateExerciseMutation,
}: ViewProps) => {
  return (
    <Dialog isVisible={isDialogOpen} onBackdropPress={onClose}>
      <Dialog.Title title="Edit Exercise" />
      <Input
        label="Name"
        placeholder="Enter exercise name"
        value={name}
        onChangeText={setName}
      />
      <Button onPress={() => updateExerciseMutation()}>Update</Button>
    </Dialog>
  );
};

export default _View;
