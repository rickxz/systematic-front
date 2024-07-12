import { FormControl, FormLabel } from "@chakra-ui/react";
import AddTextField from "./AddTextField";
import InfosTable from "../Tables/InfosTable";
import { useAddText } from "../../hooks/useAddText";
import { useDeleteText } from "../../hooks/useDeleteText";
import { formcontrol, label, formLabelStyle } from "./styles/AddTextTableStyles";

interface AddTextTableProps {
  text: string;
  placeholder: string;
}

export default function AddTextTable({ text, placeholder }: AddTextTableProps) {
  const { AddText, handleAddText, setAddText } = useAddText();
  const { handleDeleteText } = useDeleteText();
  return (
    <FormControl sx={label}>
      <FormLabel sx={formLabelStyle}>{text}</FormLabel>

      <FormControl sx={formcontrol}>
        <AddTextField onAddText={handleAddText} text={placeholder} />
        <InfosTable
          typeField={""}
          onDeleteAddedText={(index) => handleDeleteText(index, setAddText)}
          AddTexts={AddText}
        />
      </FormControl>
    </FormControl>
  );
}
