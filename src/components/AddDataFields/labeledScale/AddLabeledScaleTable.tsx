import { FormControl, FormLabel } from "@chakra-ui/react";
import AddPickListField from "../pickList/AddPickListField";
import InfosPickList from "../../Tables/PickListTable";
import { useAddText } from "../../../hooks/useAddText";
import { useDeletePickList } from "../../../hooks/useDeleteList";
import { formcontrol, label } from "../styles/AddTextTableStyles";

interface AddTextTableProps {
  text: string;
  placeholder: string;
}

export default function AddLabeledScaleTable({ text, placeholder }: AddTextTableProps) {
  const { AddText, handleAddText, setAddText } = useAddText();
  const { handleDeletePickList } = useDeletePickList();
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
