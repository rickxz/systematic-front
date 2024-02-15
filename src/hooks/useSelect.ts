import { useState } from "react";

export function useSelect(initialState: string[] = []) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [selectedValues, setSelectedValues] = useState<string[]>(initialState);

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleSelectAddButtonClick = () => {
    if (selectedValue !== null) {
      setSelectedValues((prevSelectedValues) => [...prevSelectedValues, selectedValue]);
      setSelectedValue(null);
    }
  };

  const handleDeleteSelect = (index: number) => {
    setSelectedValues((prevSelectedValues) => {
      const updatedSelectedValues = [...prevSelectedValues];
      updatedSelectedValues.splice(index, 1);
      return updatedSelectedValues;
    });
  };

  return { selectedValue, selectedValues, handleSelectChange, handleSelectAddButtonClick, handleDeleteSelect };
}
