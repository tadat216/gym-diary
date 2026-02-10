import { Button, Dialog } from "@rneui/themed";
import { View } from "react-native";
import type { ViewProps } from "./types";
import ViewDialogContent from "./view.dialog-content";
import ViewDialogLoading from "./view.dialog-loading";

const _View = ({
  isDialogOpen,
  onClose,
  onOpen,
  exercises,
  onSelectExercise,
  isAdding,
  isLoading,
}: ViewProps) => {
  return (
    <View>
      <Button onPress={onOpen}>Add Exercise</Button>
      <Dialog isVisible={isDialogOpen} onBackdropPress={onClose}>
        <Dialog.Title title="Select Exercise" />
        {isLoading ? (
          <ViewDialogLoading />
        ) : (
          <ViewDialogContent
            exercises={exercises}
            onSelectExercise={onSelectExercise}
            isAdding={isAdding}
          />
        )}
      </Dialog>
    </View>
  );
};

export default _View;
