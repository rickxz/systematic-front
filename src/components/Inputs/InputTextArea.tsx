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
      <FormLabel color={"#301E1A"}>{label}</FormLabel>
      <Textarea bgColor={"#C9D9E5"} _placeholder={{ opacity: 1, color: 'gray.500' }}
          focusBorderColor="#526D82" placeholder={placeholder} onChange={handleChange}
          {...textareaProps} />
    </FormControl>
  );
}
