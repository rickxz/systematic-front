import { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import SelectInput from "../Inputs/SelectInput";
import InfosTable from "../Tables/ProtocolAddTable";
import EventButton from "../Buttons/EventButton";

interface AddSelectTableProps {
  text: string;
  options: string[];
  placeholder: string;
}

export default function AddSelectTable({ text, options, placeholder }: AddSelectTableProps) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  const handleAddButtonClick = () => {
    if (selectedValue !== null) {
      setSelectedValues((prevSelectedValues) => [...prevSelectedValues, selectedValue]);
      setSelectedValue(null);
    }
  };

  const handleDeleteSelect = (index: number) => {
    const updatedSelectedValues = [...selectedValues];
    updatedSelectedValues.splice(index, 1);
    setSelectedValues(updatedSelectedValues);
  };

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
        <EventButton text="Add" event={handleAddButtonClick} />
      </FormControl>

      <InfosTable onDeleteAddedText={handleDeleteSelect} AddTexts={selectedValues} />
    </FormControl>
  );
}
