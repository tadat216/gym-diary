import View from "./view";
import { ContainerProps } from "./types";

const Container = ({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText = "Confirm",
  cancelText = "Cancel",
  isLoading = false,
}: ContainerProps) => {
  return (
    <View
      isOpen={isOpen}
      onClose={onClose}
      onConfirm={onConfirm}
      title={title}
      message={message}
      confirmText={confirmText}
      cancelText={cancelText}
      isLoading={isLoading}
    />
  );
};

export default Container;
