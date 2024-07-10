import { FormControl, FormLabel } from "@chakra-ui/react";
import SelectInput from "../Inputs/SelectInput";
import InfosTable from "../Tables/InfosTable";
import EventButton from "../Buttons/EventButton";
import { useSelect } from "../../hooks/useSelect";
import { conteiner, formcontrol } from "./styles/AddSelectionStyles";

interface AddSelectTableProps {
  label?: string,
  options: string[];
  placeholder: string;
  typeField: string;
  onUpdate: (values: string[]) => void;
}

export default function AddSelectTable({ options, onUpdate }: AddSelectTableProps) {
  const { selectedValue, selectedValues, handleSelectChange, handleSelectAddButtonClick, handleDeleteSelect } =
    useSelect();

    const handleSelectAddButtonClickWithUpdate = () => {
      handleSelectAddButtonClick();
      if(selectedValue && selectedValues){
        setTimeout(() => onUpdate([...selectedValues, selectedValue]), 0);
      }
    };

    const handleDeleteSelectWithUpdate = (index: number) => {
      handleDeleteSelect(index);
      setTimeout(() => onUpdate(selectedValues.filter((_, i) => i !== index)), 0);
    };

  return (
    <FormControl sx={conteiner} alignContent={"center"}>
      <FormLabel>{label}</FormLabel>
      <FormControl sx={formcontrol}>
        <SelectInput
          values={options}
          names={options}
          onSelect={handleSelectChange}
          selectedValue={selectedValue}
          page={"protocol"}
        />
        <EventButton text="Add" event={handleSelectAddButtonClickWithUpdate} w={"10%"} />
      </FormControl>

      <InfosTable
        typeField="select"
        onDeleteAddedText={handleDeleteSelectWithUpdate}
        AddTexts={selectedValues}
      />
    </FormControl>
  );
}
