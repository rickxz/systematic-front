import { AddIcon } from "@chakra-ui/icons";
import EditButton from "../Buttons/EditButton";
import DeleteButton from "../Buttons/DeleteButton";
import { useInteractiveTable } from "../../hooks/useInteractiveTable";
import { TableContainer, Table, Thead, Tbody, Tr, Th, Td, Button, Select, Input } from "@chakra-ui/react";

interface Row {
  id: number;
  question: string;
  type: string;
}

interface InteractiveTableProps {
  onSave: (data: Row[]) => void;
}

export default function InteractiveTable({ onSave }: InteractiveTableProps) {
  const { rows, addRow, handleDelete, handleQuestionChange, handleTypeChange, options, headers } =
    useInteractiveTable();

  const handleSave = () => {
    const rowsData = rows;
    onSave(rowsData);
  };

  return (
    <TableContainer>
      <Table variant="striped" size="md" w={"60vw"} border={"solid black 1px"} borderRadius={"16px"}>
        <Thead bgColor={"#303D50"}>
          <Tr>
            {headers.map((header, index) => (
              <Th key={index} color={"#FDF0D5"}>{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, index) => (
            <Tr key={index} bgColor={"#839CB0"}>
              <Td>{row.id}</Td>
              <Td>
                <Input value={row.question} onChange={(e) => handleQuestionChange(index, e.target.value)}
                border={"solid 1px #303D50"} />
              </Td>
              <Td>
                <Select border={"solid 1px #303D50"} value={row.type} onChange={(e) => handleTypeChange(index, e.target.value)}>
                  {options.map((opt, i) => (
                    <option key={i} value={opt.toLowerCase()}>
                      {opt}
                    </option>
                  ))}
                </Select>
              </Td>
              <Td>
                <DeleteButton index={index} handleDelete={() => handleDelete(index)} />
                <EditButton
                  index={index}
                  editIndex={index}
                  handleEdit={() => {
                    // handle edit logic
                  }}
                  handleSaveEdit={() => {
                    // handle save edit logic
                  }}
                />
              </Td>
            </Tr>
          ))}
          <Tr bgColor={"#303D50"}>
            <Td></Td>
            <Td colSpan={2}>
              <Button size="sm" leftIcon={<AddIcon />} onClick={addRow}>
                Add Row
              </Button>
            </Td>
            <Td>
              <Button size="sm" onClick={handleSave}>Save</Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
