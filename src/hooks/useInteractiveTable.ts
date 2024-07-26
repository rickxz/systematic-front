import { useState } from "react";

export interface Row {
  id: number;
  question: string;
  type: string;
}

export function useInteractiveTable() {
  const [rows, setRows] = useState<Row[]>([]);
  const options = ["", "Textual", "Pick list", "Number scale", "Labeled List"];
  const headers = ["Id", "Question", "Type", ""];

  const renderAddRow = (question?: string, type?: string) => {
    if(question && type){
      setRows([...rows, { id: rows.length + 1, question: question, type: type }])
    }
  }

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

  const getRowsData = () => {
    return rows;
  };

  return { rows, addRow, renderAddRow, handleDelete, handleQuestionChange, handleTypeChange, options, headers, getRowsData };
}
