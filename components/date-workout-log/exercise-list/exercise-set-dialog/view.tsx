import { Button, Dialog, Input } from "@rneui/themed";
import { View } from "react-native";
import type { ViewProps } from "./types";

const _View = ({
  visible,
  onClose,
  weight,
  reps,
  onWeightChange,
  onRepsChange,
  onSubmit,
  onDelete,
  isSubmitting,
  isDeleting,
  isEditing,
}: ViewProps) => {
  return (
    <Dialog isVisible={visible} onBackdropPress={onClose}>
      <Dialog.Title title={isEditing ? "Edit Set" : "Add Set"} />
      <View style={{ gap: 16 }}>
        <Input
          label="Weight (kg)"
          value={weight}
          onChangeText={onWeightChange}
          keyboardType="numeric"
          placeholder="Enter weight"
        />
        <Input
          label="Reps"
          value={reps}
          onChangeText={onRepsChange}
          keyboardType="numeric"
          placeholder="Enter reps"
        />
        <View
          style={{ flexDirection: "row", gap: 8, justifyContent: "flex-end" }}
        >
          {isEditing && onDelete && (
            <Button
              title="Delete"
              onPress={onDelete}
              color="error"
              disabled={isDeleting || isSubmitting}
              loading={isDeleting}
            />
          )}
          <Button
            title="Cancel"
            onPress={onClose}
            type="outline"
            disabled={isSubmitting || isDeleting}
          />
          <Button
            title={isEditing ? "Save" : "Add"}
            onPress={onSubmit}
            disabled={!weight || !reps || isSubmitting || isDeleting}
            loading={isSubmitting}
          />
        </View>
      </View>
    </Dialog>
  );
};

export default _View;
