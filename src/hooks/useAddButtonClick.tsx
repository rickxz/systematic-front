/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

const [selectedValue, setSelectedValue] = useState<string | null>(null);
const [selectedValues, setSelectedValues] = useState<string[]>([]);

export const handleAddButtonClick = () => {
  selectedValues;
  if (selectedValue !== null) {
    setSelectedValues((prevSelectedValues) => [...prevSelectedValues, selectedValue]);
    setSelectedValue(null);
  }
};
