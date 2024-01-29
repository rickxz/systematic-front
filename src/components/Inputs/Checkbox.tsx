import { FormControl, FormLabel, CheckboxGroup, Stack, Checkbox } from "@chakra-ui/react";

interface ICheckBoxprops {
  label: string;
  name: string[];
  handleCheckboxChange?: (selectedItems: string[]) => void;
}

export default function CheckboxInput({ label, name, handleCheckboxChange }: ICheckBoxprops) {
  const values: string[] = name.map((value) => value.toLowerCase());

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <CheckboxGroup colorScheme="green" onChange={handleCheckboxChange} defaultValue={values}>
        <Stack spacing={[1, 5]} direction={["column", "row"]}>
          {name.map((checkboxName, index) => (
            <Checkbox key={index} value={checkboxName.toLowerCase()}>
              {checkboxName}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
    </FormControl>
  );
}
