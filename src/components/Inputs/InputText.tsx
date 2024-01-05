import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import SearchButton from "../Buttons/SearchButton";

interface ITextFieldProps {
  label: string;
  placeholder: string;
  type: string;
  nome: string;
}

export default function InputText({ label, placeholder, type, nome }: ITextFieldProps) {
  const isSearchField = type === "search";
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <FormControl display={"flex"} flexDir={"row"} gap={"1rem"}>
        {isSearchField && <SearchButton />}
        <Input type={type} name={nome} placeholder={placeholder} w={isSearchField ? "250px" : "100%"} />
      </FormControl>
    </FormControl>
  );
}
