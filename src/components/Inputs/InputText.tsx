import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import SearchButton from "../Buttons/SearchButton";

interface ITextFieldProps {
  label: string;
  placeholder: string;
  type: string;
  nome: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function InputText({ label, placeholder, type, nome }: ITextFieldProps) {
  const isSearchField = type === "search";
  return (
    <FormControl display={"flex"} flexDir={"column"} mt={10} ml={"5em"}>
      <FormLabel>{label}</FormLabel>
      <FormControl display={"flex"} flexDir={"row"} gap={"1rem"} alignItems={"center"}>
        {isSearchField && <SearchButton />}
        <Input type={type} name={nome} placeholder={placeholder} w={isSearchField ? "250px" : "93.5%"} />
      </FormControl>
    </FormControl>
  );
}
