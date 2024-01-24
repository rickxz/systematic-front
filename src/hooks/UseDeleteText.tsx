import { useState } from "react";

// eslint-disable-next-line react-hooks/rules-of-hooks
const [selectedValues, setSelectedValues] = useState<string[]>([]);

const handleDeleteSelect = (index: number) => {
  const updatedSelectedValues = [...selectedValues];
  updatedSelectedValues.splice(index, 1);
  setSelectedValues(updatedSelectedValues);
};
export const handleDelete = (index: number) => {
  handleDeleteSelect(index);
};
