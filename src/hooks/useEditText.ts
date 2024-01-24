/* eslint-disable react-hooks/rules-of-hooks */
import { useState } from "react";

const [editIndex, setEditIndex] = useState<number | null>(null);
const [editedValue, setEditedValue] = useState<string>("");

export const handleEdit = (AddTexts: string[], index: number) => {
  setEditIndex(index);
  setEditedValue(AddTexts[index]);
};
export const handleSaveEdit = (AddTexts: string[]) => {
  if (editIndex !== null) {
    AddTexts[editIndex] = editedValue;

    setEditIndex(null);
    setEditedValue("");
  }
};
