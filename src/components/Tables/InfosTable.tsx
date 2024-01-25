import { Table, Tbody, Tr, Td, TableContainer, Input } from "@chakra-ui/react";
import DeleteButton from "../Buttons/DeleteButton";
import EditButton from "../Buttons/EditButton";
import { useEditState } from "../../hooks/useEdit";

interface InfosTableProps {
  AddTexts: string[];
  onDeleteAddedText: (index: number) => void;
  typeField: string;
}

export default function InfosTable({ AddTexts, onDeleteAddedText, typeField }: InfosTableProps) {
  const { editIndex, handleEdit, handleSaveEdit, editedValue, handleChange } = useEditState({
    AddTexts,
    onSaveEdit: (editedValue, editIndex) => {
      AddTexts[editIndex] = editedValue;
    },
  });

  return (
    <TableContainer border={"solid black 1px"} w="1000px" h={"120px"} overflowY={"auto"}>
      <Table variant="simple" size="md">
        <Tbody className="tableBody">
          {AddTexts.map((addText, index) => (
            <Tr key={index}>
              <Td>{editIndex === index ? <Input value={editedValue} onChange={handleChange} /> : addText}</Td>
              <Td textAlign={"right"}>
                <DeleteButton index={index} handleDelete={() => onDeleteAddedText(index)} />
                {typeField !== "select" ? (
                  <EditButton
                    index={index}
                    editIndex={editIndex}
                    handleEdit={() => handleEdit(index)}
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
