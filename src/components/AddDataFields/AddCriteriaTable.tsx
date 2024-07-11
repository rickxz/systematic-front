import { FormControl, FormLabel } from "@chakra-ui/react";
import AddTextField from "./AddTextField";
import InfosTable from "../Tables/InfosTable";
import { useAddCriteria } from "../../hooks/useAddCriteria";
import { useDeleteText } from "../../hooks/useDeleteText";
import { formcontrol, label } from "./styles/AddTextTableStyles";

interface AddCriteriaTableProps {
  text: string;
  placeholder: string;
  onUpdate: (criteria: { description: string; type: "INCLUSION" | "EXCLUSION"; }[]) => void;
}

export default function AddCriteriaTable({ text, placeholder, onUpdate }: AddCriteriaTableProps) {
  const { AddText, handleAddText, setAddText } = useAddCriteria();
  const { handleDeleteText } = useDeleteText();

  const handleUpdate = (newText: string) => {
    const type = text.toUpperCase().includes("INCLUSION") ? "INCLUSION" : "EXCLUSION";
    const newCriteria = { description: newText, type: type as "INCLUSION" | "EXCLUSION" };
    handleAddText(newCriteria);
    onUpdate([...AddText, newCriteria]);
  };

  const handleDelete = (index: number) => {
    const updatedAddText = [...AddText];
    updatedAddText.splice(index, 1);
    setAddText(updatedAddText);
    onUpdate(updatedAddText);
  };

  return (
    <FormControl sx={label}>
      <FormLabel>{text}</FormLabel>
      <FormControl sx={formcontrol}>
        <AddTextField onAddText={handleUpdate} text={placeholder} />
        <InfosTable
          typeField={""}
          onDeleteAddedText={handleDelete}
          AddTexts={AddText.map(criteria => criteria.description)}
        />
      </FormControl>
    </FormControl>
  );
}
