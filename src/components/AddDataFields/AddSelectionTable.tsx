import { useState } from "react";
import { FormControl } from "@chakra-ui/react";
import SelectInput from "../Inputs/SelectInput";
import InfosTable from "../Tables/ProtocolAddTable";
import EventButton from "../Buttons/EventButton";
import { handleAddButtonClick } from "../../hooks/useAddButtonClick";
interface AddSelectTableProps {
  options: string[];
  placeholder: string;
  typeField: string;
}

export default function AddSelectTable({ options, placeholder, typeField }: AddSelectTableProps) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [selectedValues] = useState<string[]>([]);

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <FormControl display={"flex"} flexDir={"row"} columnGap={"5"}>
      <FormControl display={"flex"} flexDir={"column"} rowGap={"5"}>
        <SelectInput
          values={options}
          names={options}
          label={placeholder}
          onSelect={handleSelectChange}
          selectedValue={selectedValue}
        />
        <EventButton text="Add" event={handleAddButtonClick} />
      </FormControl>

      <InfosTable typeField={typeField} AddTexts={selectedValues} />
    </FormControl>
  );
}
