import { useState } from "react";
import EditButton from "../Buttons/EditButton";
import DeleteButton from "../Buttons/DeleteButton";
import { handleDelete } from "../../hooks/UseDeleteText";
import { handleEdit, handleSaveEdit } from "../../hooks/useEditText";
import { Table, Tbody, Tr, Td, TableContainer, Input } from "@chakra-ui/react";

interface InfosTableProps {
  AddTexts: string[];
  typeField: string;
}

export default function InfosTable({ AddTexts, typeField }: InfosTableProps) {
  const [editIndex] = useState<number | null>(null);
  const [editedValue, setEditedValue] = useState<string>("");

  return (
    <TableContainer border={"solid black 1px"} w="1000px" h={"120px"} overflowY={"auto"}>
      <Table variant="simple" size="md">
        <Tbody className="tableBody">
          {AddTexts.map((addText, index) => (
            <Tr key={index}>
              <Td>
                {editIndex === index ? (
                  <Input value={editedValue} onChange={(e) => setEditedValue(e.target.value)} />
                ) : (
                  addText
                )}
              </Td>
              <Td textAlign={"right"}>
                <DeleteButton index={index} handleDelete={(index) => handleDelete(index)} />
                {typeField !== "select" ? (
                  <EditButton
                    index={index}
                    editIndex={editIndex}
                    handleEdit={(index) => handleEdit(AddTexts, index)}
                    handleSaveEdit={() => handleSaveEdit(AddTexts)}
                    AddTexts={AddTexts}
                  />
                ) : null}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
