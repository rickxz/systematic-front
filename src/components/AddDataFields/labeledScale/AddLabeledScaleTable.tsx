import { FormControl, FormLabel } from "@chakra-ui/react";
import AddLabeledListField from "./AddLabeledScaleField";
import InfosLabeled from "../../Tables/LabeledListInfosTable";
import { useDeleteLabeledList } from "../../../hooks/useDeleteLabeledList";
import { formcontrol, label } from "../styles/AddTextTableStyles";
import { useAddLabeledList } from "../../../hooks/useAddLabeledList";

interface AddTextTableProps {
  text: string;
  placeholder: string;
}

export default function AddLabeledScaleTable({ text, placeholder }: AddTextTableProps) {
  const { AddText, handleAddText, setAddText } = useAddLabeledList();
  const { handleDeleteLabeledList} = useDeleteLabeledList();
  return (

    <FormControl sx={label}>
      <FormLabel>{text}</FormLabel>

      <FormControl sx={formcontrol}>
        <AddLabeledListField onAddText={handleAddText} text={placeholder} />
        <InfosLabeled
          typeField={""}
          onDeleteAddedText={(index: number) => handleDeleteLabeledList(index, setAddText)}
          AddTexts={AddText}
        />
      </FormControl>
    </FormControl>
  );
}