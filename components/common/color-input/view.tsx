import { Dialog } from "@rneui/themed";
import { TouchableOpacity, View } from "react-native";
import ColorPicker from "react-native-wheel-color-picker";
import { ViewProps } from "./types";

const _View = ({
  color,
  setColor,
  isDialogOpen,
  setIsDialogOpen,
}: ViewProps) => {
  return (
    <View>
      <TouchableOpacity
        className={`w-full h-10 rounded-md`}
        style={{ backgroundColor: color }}
        onPress={() => setIsDialogOpen(true)}
      />

      <Dialog
        isVisible={isDialogOpen}
        onBackdropPress={() => setIsDialogOpen(false)}
      >
        <ColorPicker
          color={color}
          onColorChangeComplete={setColor}
          row={false}
        />
      </Dialog>
    </View>
  );
};

export default _View;
