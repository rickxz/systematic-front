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
}

export default function AddSelectTable({ label, options }: AddSelectTableProps) {
  const { selectedValue, selectedValues, handleSelectChange, handleSelectAddButtonClick, handleDeleteSelect } =
    useSelect();

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
        <EventButton text="ADD" event={handleSelectAddButtonClick} w={"10%"} />
      </FormControl>

      <InfosTable
        typeField="select"
        onDeleteAddedText={(index) => handleDeleteSelect(index)}
        AddTexts={selectedValues}
      />
    </FormControl>
  );
}
