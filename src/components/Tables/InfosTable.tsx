import EditButton from "../Buttons/EditButton";
import DeleteButton from "../Buttons/DeleteButton";
import { useEditState } from "../../hooks/useEdit";
import { tbConteiner } from "./styles/infosTableStyles";
import { Table, Tbody, Tr, Td, TableContainer, Input } from "@chakra-ui/react";
import axios from "../../interceptor/interceptor";

interface InfosTableProps {
  AddTexts: string[];
  onDeleteAddedText: (index: number) => void;
  typeField: string;
  url: string;
}

export default function InfosTable({ AddTexts, onDeleteAddedText, typeField, url }: InfosTableProps) {
  const { editIndex, handleEdit, handleSaveEdit, editedValue, handleChange } = useEditState({
    AddTexts,
    onSaveEdit: (editedValue, editIndex) => {
      AddTexts[editIndex] = editedValue;
      const data = {
        keywords: AddTexts
      }
      axios.put(url, data, {withCredentials: true});
    }
  });

  return (
    <TableContainer sx={tbConteiner}>
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