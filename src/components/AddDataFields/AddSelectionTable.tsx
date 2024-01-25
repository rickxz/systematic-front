import { FormControl, FormLabel } from "@chakra-ui/react";
import SelectInput from "../Inputs/SelectInput";
import InfosTable from "../Tables/ProtocolAddTable";
import EventButton from "../Buttons/EventButton";
import { useSelect } from "../../hooks/useSelect"; // Importe o hook

interface AddSelectTableProps {
  text: string;
  options: string[];
  placeholder: string;
}

export default function AddSelectTable({ text, options, placeholder }: AddSelectTableProps) {
  const { selectedValue, selectedValues, handleSelectChange, handleSelectAddButtonClick, handleDeleteSelect } =
    useSelect();

  return (
    <FormControl display={"flex"} flexDir={"column"} rowGap={"5"}>
      <FormLabel>{text}</FormLabel>

      <FormControl display={"flex"} flexDir={"column"} rowGap={"5"}>
        <SelectInput
          values={options}
          names={options}
          label={placeholder}
          onSelect={handleSelectChange}
          selectedValue={selectedValue}
        />
        <EventButton text="Add" event={handleSelectAddButtonClick} />
      </FormControl>

      <InfosTable
        typeField="select"
        onDeleteAddedText={(index) => handleDeleteSelect(index)}
        AddTexts={selectedValues}
      />
    </FormControl>
  );
}
