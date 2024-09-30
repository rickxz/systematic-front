import { FormControl, FormLabel } from "@chakra-ui/react";
import AddLabeledListField from "./AddLabeledScaleField";
import InfosLabeled from "../../Tables/labeledListTable";
import { useDeleteLabel } from "../../../hooks/useDeleteLabel";
import { formcontrol, label } from "../styles/AddTextTableStyles";
import { useAddLabeledList } from "../../../hooks/useAddLabeledList";

interface AddTextTableProps {
  text: string;
  placeholder: string;
}

export default function AddLabeledScaleTable({ text, placeholder }: AddTextTableProps) {
  const { AddText, handleAddText, setAddText } = useAddLabeledList();
  const { handleDeleteLabel} = useDeleteLabel();
  return (

    <FormControl sx={label}>
      <FormLabel>{text}</FormLabel>

      <FormControl sx={formcontrol}>
        <AddLabeledListField onAddText={handleAddText} text={placeholder} />
        <InfosLabeled
          typeField={""}
          onDeleteAddedText={(index: number) => handleDeleteLabel(index, setAddText)}
          AddTexts={AddText}
        />
      </FormControl>
    </FormControl>
  );
}