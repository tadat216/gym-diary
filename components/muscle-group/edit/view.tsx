import ColorPicker from "@/components/common/color-input";
import { Button, Dialog, Input, Text } from "@rneui/themed";
import { ViewProps } from "./types";

const _View = ({
  isDialogOpen,
  setIsEditDialogOpen,
  name,
  setName,
  color,
  setColor,
  editMuscleGroupMutation,
}: ViewProps) => {
  return (
    <Dialog
      isVisible={isDialogOpen}
      onBackdropPress={() => setIsEditDialogOpen(false)}
    >
      <Dialog.Title title="Edit Muscle Group" />
      <Input
        label="Name"
        placeholder="Enter muscle group name"
        value={name}
        onChangeText={setName}
      />
      <Text>Color</Text>
      <ColorPicker color={color} setColor={setColor} />

      <Button onPress={() => editMuscleGroupMutation()}>Update</Button>
    </Dialog>
  );
};

export default _View;
