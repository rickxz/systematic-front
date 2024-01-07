import { FormControl, FormLabel, CheckboxGroup, Stack, Checkbox } from "@chakra-ui/react";

interface ICheckBoxprops {
  label: string;
  value: string[];
  name: string[];
}

export default function CheckboxInput({ label, value, name }: ICheckBoxprops) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <CheckboxGroup colorScheme="green" defaultValue={value}>
        <Stack spacing={[1, 5]} direction={["column", "row"]}>
          {name.map((checkboxName, index) => (
            <Checkbox key={index} value={checkboxName}>
              {checkboxName}
            </Checkbox>
          ))}
        </Stack>
      </CheckboxGroup>
    </FormControl>
  );
}
