import { useState } from "react";
import { TableContainer, Table, Thead, Tbody, Tr, Th, Td, Button, Select, Input } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import DeleteButton from "../Buttons/DeleteButton";
import EditButton from "../Buttons/EditButton";

interface Row {
  id: number;
  question: string;
  type: string;
}

export default function InteractiveTable() {
  const [rows, setRows] = useState<Row[]>([]);

  const options = ["", "Pick one list", "Pick many list", "Number scale", "LabeledList"];

  const addRow = () => {
    setRows([...rows, { id: rows.length + 1, question: "", type: "" }]);
  };

  const handleDelete = (index: number) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  return (
    <TableContainer>
      <Table variant="simple" size="md" w={"60vw"} border={"solid black 1px"} borderRadius={"16px"}>
        <Thead>
          <Tr>
            <Th>Id</Th>
            <Th>Question</Th>
            <Th>Type</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, index) => (
            <Tr key={index}>
              <Td>{row.id}</Td>
              <Td>
                <Input
                  value={row.question}
                  onChange={(e) => {
                    const updatedRows = [...rows];
                    updatedRows[index].question = e.target.value;
                    setRows(updatedRows);
                  }}
                />
              </Td>
              <Td>
                <Select
                  value={row.type}
                  onChange={(e) => {
                    const updatedRows = [...rows];
                    updatedRows[index].type = e.target.value;
                    setRows(updatedRows);
                  }}
                >
                  {options.map((opt) => (
                    <option value={opt.toLowerCase()}>{opt} </option>
                  ))}
                </Select>
              </Td>
              <Td>
                <DeleteButton index={index} handleDelete={() => handleDelete(index)} />
                <EditButton
                  index={index}
                  editIndex={index}
                  handleEdit={() => {
                    ("");
                  }}
                  handleSaveEdit={() => {
                    ("");
                  }}
                />
              </Td>
            </Tr>
          ))}
          <Tr>
            <Td></Td>
            <Td colSpan={2}>
              <Button size="sm" leftIcon={<AddIcon />} onClick={addRow}>
                Add Row
              </Button>
            </Td>
            <Td></Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
