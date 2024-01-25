import { useState, useCallback, ChangeEvent } from "react";

interface UseEditStateProps {
  AddTexts: string[];
  onSaveEdit: (editedValue: string, editIndex: number) => void;
}

export function useEditState({ AddTexts, onSaveEdit }: UseEditStateProps) {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editedValue, setEditedValue] = useState<string>("");

  const handleEdit = useCallback(
    (index: number) => {
      setEditIndex(index);
      setEditedValue(AddTexts[index]);
    },
    [AddTexts]
  );

  const handleSaveEdit = useCallback(() => {
    if (editIndex !== null) {
      onSaveEdit(editedValue, editIndex);
      setEditIndex(null);
      setEditedValue("");
    }
  }, [editIndex, editedValue, onSaveEdit]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEditedValue(e.target.value);
  }, []);

  return { editIndex, handleEdit, handleSaveEdit, editedValue, handleChange };
}
