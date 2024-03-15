import { FormControl, Select } from "@chakra-ui/react";
import React from "react";
import { formcontrol } from "./styles/SelectInputStyles";

interface ISelectInputProps {
  values: string[];
  names: string[];
  onSelect: (selectValue: string) => void;
  selectedValue: string | null;
  placeholder?: string;
}

export default function SelectInput({ values, names, onSelect, selectedValue, placeholder }: ISelectInputProps) {
  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onSelect(event.target.value);
  };

  return (
    <FormControl sx={formcontrol}>
      <Select placeholder={placeholder} value={selectedValue || ""} onChange={handleSelectChange}>
        {names.map((optionName, index) => (
          <option key={index} value={values[index]}>
            {optionName}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}
