import { ContainerProps } from "./types";
import ColorInputView from "./view";
import { useState } from "react";

const Container = ({ color, setColor }: ContainerProps) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <ColorInputView
      color={color}
      setColor={setColor}
      isDialogOpen={isDialogOpen}
      setIsDialogOpen={setIsDialogOpen}
    />
  );
};

export default Container;
