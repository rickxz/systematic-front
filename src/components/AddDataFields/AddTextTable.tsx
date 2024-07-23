import { FormControl, FormLabel } from "@chakra-ui/react";
import AddTextField from "./AddTextField";
import InfosTable from "../Tables/InfosTable";
import { useAddText } from "../../hooks/useAddText";
import { useDeleteText } from "../../hooks/useDeleteText";
import { formcontrol, label } from "./styles/AddTextTableStyles";

interface AddTextTableProps {
  text: string;
  placeholder: string;
  url: string;
}

export default function AddTextTable({ text, placeholder, url }: AddTextTableProps) {
  const { AddText, handleAddText, setAddText } = useAddText();
  const { handleDeleteText } = useDeleteText();
  return (
    <FormControl sx={label}>
      <FormLabel>{text}</FormLabel>

      <FormControl sx={formcontrol}>
        <AddTextField url={url} onAddText={handleAddText} placeholder={placeholder} text={text}/>
        <InfosTable
          text={text}
          typeField={""}
          onDeleteAddedText={(index) => handleDeleteText(index, setAddText, url, text)}
          AddTexts={AddText}
          url={url}
        />
      </FormControl>
    </FormControl>
  );
}