import { FormControl, FormLabel } from "@chakra-ui/react";
import AddTextField from "./AddTextField";
import InfosTable from "../Tables/InfosTable";
import { useAddCriteria } from "../../hooks/useAddCriteria";
import { useDeleteText } from "../../hooks/useDeleteText";
import { formcontrol, label } from "./styles/AddTextTableStyles";

interface AddCriteriaTableProps {
  text: string;
  placeholder: string;
  onUpdate: (criteria: { description: string; type: "inclusion" | "exclusion"; }[]) => void;
}

export default function AddCriteriaTable({ text, placeholder, onUpdate }: AddCriteriaTableProps) {
  const { AddText, handleAddText, handleDeleteText } = useAddCriteria();

  const handleUpdate = (newText: string) => {
    const type = text.toLowerCase().includes("inclusion") ? "inclusion" : "exclusion";
    const newCriteria = { description: newText, type: type as "inclusion" | "exclusion" };
    handleAddText(newCriteria);
    onUpdate([...AddText, newCriteria]);
  };

  return (
    <FormControl sx={label}>
      <FormLabel>{text}</FormLabel>
      <FormControl sx={formcontrol}>
        <AddTextField onAddText={handleUpdate} text={placeholder} />
        <InfosTable
          typeField={""}
          onDeleteAddedText={(index) => handleDeleteText(index)}
          AddTexts={AddText.map(criteria => criteria.description)}
        />
      </FormControl>
    </FormControl>
  );
}
