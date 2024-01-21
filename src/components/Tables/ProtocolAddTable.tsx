import { useState } from "react";
import { Table, Tbody, Tr, Td, TableContainer, Button, Icon, Input } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

interface InfosTableProps {
  AddTexts: string[];
  onDeleteAddedText: (index: number) => void;
}

export default function InfosTable({ AddTexts, onDeleteAddedText }: InfosTableProps) {
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
      // Substitui o valor antigo pelo novo valor editado
      AddTexts[editIndex] = editedValue;
      // Limpa o estado de edição
      setEditIndex(null);
      setEditedValue("");
    }
  };

  return (
    <TableContainer border={"solid black 1px"} w="1050px" h={"120px"} overflowY={"auto"}>
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
                <Button variant="ghost" onClick={() => handleDelete(index)}>
                  <Icon as={DeleteIcon} w={"15px"} h={"15px"} />
                </Button>
                {editIndex === index ? (
                  <Button variant="ghost" onClick={handleSaveEdit}>
                    Save
                  </Button>
                ) : (
                  <Button variant="ghost" onClick={() => handleEdit(index)}>
                    <Icon as={EditIcon} w={"15px"} h={"15px"} />
                  </Button>
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
