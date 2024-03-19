import { useState } from "react";

const useInputState = <T>(initialValue: T) => {
  const [value, setValue] = useState<T>(initialValue);

  const handleChange = (newValue: T) => {
    setValue(newValue);
    console.log("clicou: " + newValue);
  };

  return { value, handleChange };
};

export default useInputState;
