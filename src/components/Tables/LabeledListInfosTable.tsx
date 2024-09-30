import EditButton from "../Buttons/EditButton";
import DeleteButton from "../Buttons/DeleteButton";
import { useEditLabel } from "../../hooks/useEditLabel";
import { tbConteiner } from "./styles/infosTableStyles";
import { Table, Tbody, Tr, Td, TableContainer, Input } from "@chakra-ui/react";

interface InfosTableProps {
  AddTexts: { label: string; value: number }[];
  onDeleteAddedText: (index: number) => void;
  typeField: string;
}

export default function InfosLabeled({ AddTexts, onDeleteAddedText, typeField }: InfosTableProps) {
  const { editIndex, handleEdit, handleSaveEdit, editedValue, handleChange } = useEditLabel({
    AddTexts,
    onSaveEdit: (editedValue: {label: string, value: number}, editIndex: number) => {
      AddTexts[editIndex] = editedValue;
    },
  });

  return (
    <TableContainer sx={tbConteiner}>
      <Table variant="simple" size="md">
        <Tbody className="tableBody">
          {AddTexts.map((addText, index) => (
            <Tr key={index}>
              <Td>
                {editIndex === index ? (
                  <>
                    <Input name="label" value={editedValue.label} onChange={handleChange} placeholder="Edit label" />
                    <Input name="value" value={editedValue.value} onChange={handleChange} placeholder="Edit value" mt={2} type="number" />
                  </>
                ) : (
                  `${addText.label}: ${addText.value}`
                )}
              </Td>
              <Td textAlign={"right"}>
                <DeleteButton index={index} handleDelete={() => onDeleteAddedText(index)} />
                {typeField !== "select" && (
                  <EditButton
                    index={index}
                    editIndex={editIndex}
                    handleEdit={() => handleEdit(index)}
                    handleSaveEdit={handleSaveEdit}
                  />
                )}
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
