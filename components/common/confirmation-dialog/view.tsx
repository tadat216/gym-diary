import { Dialog, Text, Button } from "@rneui/themed";
import { ViewProps } from "./types";

const View = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText,
  cancelText,
  isLoading,
}: ViewProps) => {
  return (
    <Dialog isVisible={isOpen} onBackdropPress={onClose}>
      <Dialog.Title title={title} />
      <Text>{message}</Text>
      <Dialog.Actions>
        <Button
          title={cancelText}
          onPress={onClose}
          disabled={isLoading}
          type="clear"
        />
        <Button
          title={confirmText}
          onPress={onConfirm}
          loading={isLoading}
          color="error"
        />
      </Dialog.Actions>
    </Dialog>
  );
};

export default View;
