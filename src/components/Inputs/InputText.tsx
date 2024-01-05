import { FormLabel, Input } from "@chakra-ui/react";

interface ITextFieldProps {
  label: string;
  placeholder: string;
}

export default function InputText({ label, placeholder }: ITextFieldProps) {
  return (
    <>
      <FormLabel>{label}</FormLabel>
      <Input type="text" name="title" placeholder={placeholder} />
    </>
  );
}
