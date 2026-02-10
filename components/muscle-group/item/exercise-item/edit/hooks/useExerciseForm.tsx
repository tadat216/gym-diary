import { useState, useEffect } from "react";
import { Exercise } from "@/db";

const useExerciseForm = (exercise: Exercise) => {
  const [name, setName] = useState(exercise.name);

  useEffect(() => {
    setName(exercise.name);
  }, [exercise]);

  return { name, setName };
};

export default useExerciseForm;
