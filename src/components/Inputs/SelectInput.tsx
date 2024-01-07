import { FormControl, FormLabel, Select } from "@chakra-ui/react";

interface ISelectInputProps {
  values: string[];
  names: string[];
  label: string;
}

export default function SelectInput({ values, names, label }: ISelectInputProps) {
  return (
    <FormControl display={"flex"} flexDir={"column"}>
      <FormLabel>{label}</FormLabel>
      <Select w={"50%"}>
        {names.map((optionName, index) => (
          <option key={index} value={values[index]}>
            {optionName}
          </option>
        ))}
      </Select>
    </FormControl>
  );
}
