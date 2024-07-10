import { FormControl, FormLabel } from "@chakra-ui/react";
import AddTextField from "./AddTextField";
import InfosTable from "../Tables/InfosTable";
import { useAddText } from "../../hooks/useAddText";
import { useDeleteText } from "../../hooks/useDeleteText";
import { formcontrol, label } from "./styles/AddTextTableStyles";
// importações existentes...

interface AddTextTableProps {
  text: string;
  placeholder: string;
  onUpdate: (values: string[]) => void;
}

export default function AddTextTable({ text, placeholder, onUpdate }: AddTextTableProps) {
  const { AddText, handleAddText, setAddText } = useAddText();
  const { handleDeleteText } = useDeleteText();

  const handleUpdate = (newTexts: string[]) => {
    setAddText(newTexts);
    onUpdate(newTexts);
  };

  return (
    <FormControl sx={label}>
      <FormLabel>{text}</FormLabel>
      <FormControl sx={formcontrol}>
        <AddTextField onAddText={(newText) => handleUpdate([...AddText, newText])} text={placeholder} />
        <InfosTable
          typeField={""}
          onDeleteAddedText={(index) => handleDeleteText(index, setAddText)}
          AddTexts={AddText}
        />
      </FormControl>
    </FormControl>
  );
}
