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
  text?: string;
}

export default function InfosTable({ AddTexts, onDeleteAddedText, typeField, url, text }: InfosTableProps) {
  const { editIndex, handleEdit, handleSaveEdit, editedValue, handleChange } = useEditState({
    AddTexts,
    onSaveEdit: async (editedValue, editIndex) => {
      AddTexts[editIndex] = editedValue;
      if(text == "Keywords"){
        const data = {
          keywords: AddTexts
        }
        axios.put(url, data, {withCredentials: true});
      }
      else if(text == "Inclusion criteria"){
        const objects = AddTexts.map(item => ({description: item, type: "INCLUSION"}));
        let response = await axios.get(url, {withCredentials: true});
        const criterias: {description: string, type: string}[] = response.data.content.eligibilityCriteria;
        for(let i = 0; i < criterias.length; i++){
          if(criterias[i].type == "INCLUSION"){
            criterias.splice(i, 1);
          }
        }

        for(let i = 0; i < objects.length; i ++){
          criterias.push(objects[i]);
        }

        const data = {
          eligibilityCriteria: criterias
        }
        axios.put(url, data, {withCredentials: true});
      }
      else if(text == "Exclusion criteria"){
        const objects = AddTexts.map(item => ({description: item, type: "EXCLUSION"}));
        let response = await axios.get(url, {withCredentials: true});
        const criterias: {description: string, type: string}[] = response.data.content.eligibilityCriteria;
        for(let i = 0; i < criterias.length; i++){
          if(criterias[i].type == "EXCLUSION"){
            criterias.splice(i, 1);
          }
        }

        for(let i = 0; i < objects.length; i ++){
          criterias.push(objects[i]);
        }

        const data = {
          eligibilityCriteria: criterias
        }
        axios.put(url, data, {withCredentials: true});
      }
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