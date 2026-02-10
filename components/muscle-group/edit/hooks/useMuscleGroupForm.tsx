import { useState, useEffect } from "react";
import { MuscleGroup } from "@/db";

const useMuscleGroupForm = (muscleGroup: MuscleGroup) => {
  const [name, setName] = useState(muscleGroup.name);
  const [color, setColor] = useState(muscleGroup.color_hex);

  useEffect(() => {
    setName(muscleGroup.name);
    setColor(muscleGroup.color_hex);
  }, [muscleGroup]);

  return { name, setName, color, setColor };
};

export default useMuscleGroupForm;
