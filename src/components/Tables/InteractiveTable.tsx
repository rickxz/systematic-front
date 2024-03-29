import React, { useState } from "react";
import { TableContainer, Table, Thead, Tbody, Tr, Th, Td, Button, Select, Input } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import DeleteButton from "../Buttons/DeleteButton";
import EditButton from "../Buttons/EditButton";

interface Row {
  id: number;
  question: string;
  type: string;
}

const InteractiveTable: React.FC = () => {
  const [rows, setRows] = useState<Row[]>([]);

  const addRow = () => {
    setRows([...rows, { id: rows.length + 1, question: "", type: "" }]);
  };

  const handleDelete = (index: number) => {
    const updatedRows = [...rows];
    updatedRows.splice(index, 1);
    setRows(updatedRows);
  };

  {
    /*const handleEdit = (index: number) => {
    // handle edit logic here if needed
  };

  const handleSaveEdit = (index: number) => {
    // handle save edit logic here if needed
  };*/
  }

  function handleSaveEdit(): void {
    throw new Error("Function not implemented.");
  }

  function handleEdit(index: number): void {
    throw new Error("Function not implemented.");
    console.log(index);
  }

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
                  {/* options for types */}
                </Select>
              </Td>
              <Td>
                {/*<Button
                  size="sm"
                  leftIcon={<EditIcon />}
                  onClick={() => {
                    console.log("handle Edit");
                  }}
                >
                  Edit
                </Button>
                <Button size="sm" leftIcon={<DeleteIcon />} onClick={() => handleDelete(index)}>
                  Delete
                </Button>*/}
                <DeleteButton index={index} handleDelete={() => handleDelete(index)} />
                <EditButton
                  index={index}
                  editIndex={index}
                  handleEdit={() => handleEdit(index)}
                  handleSaveEdit={handleSaveEdit}
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
};

export default InteractiveTable;
