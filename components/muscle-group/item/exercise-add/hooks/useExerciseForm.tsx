import { useState, useCallback } from "react";

const useExerciseForm = () => {
  const [name, setName] = useState("");

  const resetForm = useCallback(() => {
    setName("");
  }, []);

  return { name, setName, resetForm };
};

export default useExerciseForm;
