import { useState, useCallback } from "react";

const useMuscleGroupForm = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("#FF0000");

  const resetForm = useCallback(() => {
    setName("");
    setColor("#FF0000");
  }, []);

  return { name, setName, color, setColor, resetForm };
};

export default useMuscleGroupForm;
