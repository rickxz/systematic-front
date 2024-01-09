import { FormControl, FormLabel, Select } from "@chakra-ui/react";
import React from "react";

interface ISelectInputProps {
  values: string[];
  names: string[];
  label: string;
  onSelect: (selectValue: string) => void;
  selectedValue: string | null;
}

export default function SelectInput({ values, names, label, onSelect, selectedValue }: ISelectInputProps) {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value);
  };

  return (
    <FormControl display={"flex"} flexDir={"column"}>
      <FormLabel>{label}</FormLabel>
      <Select value={selectedValue || ""} onChange={handleSelectChange}>
        {names.map((optionName, index) => (
          <option key={index} value={values[index]}>
            {optionName}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}
