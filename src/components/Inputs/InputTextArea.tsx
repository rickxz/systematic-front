import { FormControl, FormLabel, Textarea } from "@chakra-ui/react";

interface ITextInputProps {
  label: string;
  placeholder: string;
}
export default function TextAreaInput({ label, placeholder }: ITextInputProps) {
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Textarea placeholder={placeholder}></Textarea>
    </FormControl>
  );
}
