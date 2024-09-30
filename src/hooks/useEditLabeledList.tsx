import { useState, useCallback, ChangeEvent } from "react";

interface UseEditStateProps {
  AddTexts: {label: string, value: number}[];
  onSaveEdit: (editedValue: {label: string, value: number}, editIndex: number) => void;
}

export function useEditLabeledList({ AddTexts, onSaveEdit }: UseEditStateProps) {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editedValue, setEditedValue] = useState<{label: string, value: number}>({label: '', value: 0});

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
      setEditedValue({label: '', value: 0});
    }
  }, [editIndex, editedValue, onSaveEdit]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedValue((prev) => ({
      ...prev,
      [name]: name === "value" ? parseInt(value, 10) : value,
    }));
  }, []);

  return { editIndex, handleEdit, handleSaveEdit, editedValue, handleChange };
}
