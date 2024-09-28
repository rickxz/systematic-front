import { SetStateAction, useState } from "react";

export interface Row {
  isNew: boolean;
  id: number;
  questionId: string | null;
  question: string;
  type: string;
  questions: string[];
}

export function useInteractiveTable() {
  const [rows, setRows] = useState<Row[]>([]);
  const options = ["", "Textual", "Pick list", "Number scale", "Labeled List"];
  const headers = ["Id", "Question", "Type", ""];

  const addRow = (setEditIndex: React.Dispatch<SetStateAction<number | null>>) => {
      setRows([...rows, { questions: [], isNew: true, questionId: null, id: rows.length + 1, question: "", type: "" }]);
      setEditIndex(rows.length);
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

  const handleServerSend = (index: number, id: string) => {
    const updatedRows = [...rows];
    updatedRows[index].questionId = id;
    setRows(updatedRows);
  }

  const handleAddQuestions = (index: number, value: string[]) => {
    const updatedRows = [...rows];
    updatedRows[index].questions = value;
    setRows(updatedRows);
  }

  const getRowsData = () => {
    return rows;
  };

  return { setRows, rows, addRow, handleServerSend, handleDelete, handleQuestionChange, handleTypeChange, handleAddQuestions, options, headers, getRowsData };
}
