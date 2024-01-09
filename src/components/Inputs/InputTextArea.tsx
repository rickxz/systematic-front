import { FormControl, FormLabel, Textarea, TextareaProps } from "@chakra-ui/react";

interface ITextInputProps extends TextareaProps {
  label: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextAreaInput({ label, placeholder, onChange, ...textareaProps }: ITextInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e);
    }
  };

  return (
    <FormControl maxW={"60vw"}>
      <FormLabel>{label}</FormLabel>
      <Textarea placeholder={placeholder} onChange={handleChange} {...textareaProps} />
    </FormControl>
  );
}
