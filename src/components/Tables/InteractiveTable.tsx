import { AddIcon } from "@chakra-ui/icons";
import EditButton from "../Buttons/EditButton";
import DeleteButton from "../Buttons/DeleteButton";
import { useInteractiveTable } from "../../hooks/useInteractiveTable";
import { TableContainer, Table, Thead, Tbody, Tr, Th, Td, Button, Select, Input } from "@chakra-ui/react";

export default function InteractiveTable() {
  const { rows, addRow, handleDelete, handleQuestionChange, handleTypeChange, options, headers } =
    useInteractiveTable();

  return (
    <TableContainer>
      <Table variant="striped" size="md" w={"60vw"} border={"solid black 1px"} borderRadius={"16px"}>
        <Thead bgColor={"#303D50"}>
          <Tr>
            {headers.map((header) => (
              <Th color={"#FDF0D5"}>{header}</Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {rows.map((row, index) => (
            <Tr key={index}>
              <Td>{row.id}</Td>
              <Td>
                <Input value={row.question} onChange={(e) => handleQuestionChange(index, e.target.value)} />
              </Td>
              <Td>
                <Select value={row.type} onChange={(e) => handleTypeChange(index, e.target.value)}>
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
