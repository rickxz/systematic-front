import { useState } from "react";

interface Row {
  id: number;
  question: string;
  type: string;
}

export function useInteractiveTable() {
  const [rows, setRows] = useState<Row[]>([]);
  const options = ["", "Pick one list", "Pick many list", "Number scale", "LabeledList"];
  const headers = ["Id", "Question", "Type", ""];

  const addRow = () => {
    setRows([...rows, { id: rows.length + 1, question: "", type: "" }]);
  };

  const handleDelete = (index: number) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  const handleQuestionChange = (index: number, value: string) => {
    const updatedRows = [...rows];
    updatedRows[index].question = value;
    setRows(updatedRows);
  };

  const handleTypeChange = (index: number, value: string) => {
    const updatedRows = [...rows];
    updatedRows[index].type = value;
    setRows(updatedRows);
  };

  return { rows, addRow, handleDelete, handleQuestionChange, handleTypeChange, options, headers };
}
