import { FormControl, FormLabel } from "@chakra-ui/react";
import AddPickListField from "./AddPickListField";
import InfosPickList from "../../Tables/PickListTable";
import { useAddText } from "../../../hooks/useAddText";
import { useDeletePickList } from "../../../hooks/useDeletePickList";
import { formcontrol, label } from "../styles/AddTextTableStyles";

interface AddTextTableProps {
  text: string;
  placeholder: string;
  questionHolder: React.Dispatch<React.SetStateAction<string[]>>
}

export default function AddPickListTable({ text, placeholder, questionHolder }: AddTextTableProps) {
  const { AddText, handleAddText, setAddText } = useAddText();
  const { handleDeletePickList } = useDeletePickList();
  questionHolder(AddText);

  return (
    <FormControl sx={label}>
      <FormLabel>{text}</FormLabel>

      <FormControl sx={formcontrol}>
        <AddPickListField onAddText={handleAddText} text={placeholder} />
        <InfosPickList
          typeField={""}
          onDeleteAddedText={(index) => handleDeletePickList(index, setAddText)}
          AddTexts={AddText}
        />
      </FormControl>
    </FormControl>
  );
}