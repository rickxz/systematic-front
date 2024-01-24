import { useState } from "react";
import { Table, Tbody, Tr, Td, TableContainer, Input } from "@chakra-ui/react";
import EditButton from "../Buttons/EditButton";
import DeleteButton from "../Buttons/DeleteButton";

interface InfosTableProps {
  AddTexts: string[];
  onDeleteAddedText: (index: number) => void;
  typeField: string;
}

export default function InfosTable({ AddTexts, onDeleteAddedText, typeField }: InfosTableProps) {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editedValue, setEditedValue] = useState<string>("");

  const handleDelete = (index: number) => {
    onDeleteAddedText(index);
  };

  const handleEdit = (index: number) => {
    setEditIndex(index);
    setEditedValue(AddTexts[index]);
  };

  const handleSaveEdit = () => {
    if (editIndex !== null) {
      AddTexts[editIndex] = editedValue;

      setEditIndex(null);
      setEditedValue("");
    }
  };

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
                    handleEdit={(index) => handleEdit(index)}
                    handleSaveEdit={handleSaveEdit}
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
