import { ViewProps } from "./types";
import { View } from "react-native";
import { Dialog, Input, Button, Text } from "@rneui/themed";
import ColorPicker from "@/components/common/color-input";

const _View = ({
  isDialogOpen,
  setIsAddDialogOpen,
  name,
  setName,
  color,
  setColor,
  addMuscleGroupMutation,
}: ViewProps) => {
  return (
    <View>
      <Button onPress={() => setIsAddDialogOpen(true)}>
        Add New Muscle Group
      </Button>
      <Dialog
        isVisible={isDialogOpen}
        onBackdropPress={() => setIsAddDialogOpen(false)}
      >
        <Dialog.Title title="Add Muscle Group" />
        <Input
          label="Name"
          placeholder="Enter muscle group name"
          value={name}
          onChangeText={setName}
        />
        <Text>Color</Text>
        <ColorPicker color={color} setColor={setColor} />

        <Button onPress={() => addMuscleGroupMutation()}>Add</Button>
      </Dialog>
    </View>
  );
};

export default _View;
