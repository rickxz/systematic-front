import { FormControl } from "@chakra-ui/react";
import SelectInput from "../Inputs/SelectInput";
import InfosTable from "../Tables/InfosTable";
import EventButton from "../Buttons/EventButton";
import { useSelect } from "../../hooks/useSelect"; // Importe o hook

interface AddSelectTableProps {
  options: string[];
  placeholder: string;
  typeField: string;
}

export default function AddSelectTable({ options, placeholder }: AddSelectTableProps) {
  const { selectedValue, selectedValues, handleSelectChange, handleSelectAddButtonClick, handleDeleteSelect } =
    useSelect();

  return (
    <FormControl display={"flex"} flexDir={"column"} gap={"5"}>
      <FormControl display={"flex"} flexDir={"row"} gap={"5"}>
        <SelectInput
          values={options}
          names={options}
          label={placeholder}
          onSelect={handleSelectChange}
          selectedValue={selectedValue}
        />
        <EventButton text="Add" event={handleSelectAddButtonClick} mt={8} w={"10%"} />
      </FormControl>

      <InfosTable
        typeField="select"
        onDeleteAddedText={(index) => handleDeleteSelect(index)}
        AddTexts={selectedValues}
      />
    </FormControl>
  );
}
