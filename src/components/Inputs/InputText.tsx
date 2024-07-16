import { FormControl, Input } from "@chakra-ui/react";
import SearchButton from "../Buttons/SearchButton";
import { FormLabel } from "@chakra-ui/react";
import { conteiner, inputconteiner } from "./styles/inputTextStyle";

interface ITextFieldProps {
  placeholder: string;
  type: string;
  nome: string;
  label: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputText({ label, placeholder, type, nome, onChange }: ITextFieldProps) {
  const isSearchField = type === "search";
  

  return (
    <FormControl mt={isSearchField ? "" : 10} sx={conteiner}>
      <FormLabel>{label}</FormLabel>
      <FormControl sx={inputconteiner}>
        <Input
          type={type}
          name={nome}
          placeholder={placeholder}
          w={isSearchField ? "250px" : "100%"}
          bgColor={"#C9D9E5"}
          borderRadius={"3px"}
          _placeholder={{ opacity: 1, color: "gray.500" }}
          focusBorderColor="#526D82"
          onChange={onChange}
        />
        {isSearchField && <SearchButton />}
      </FormControl>
    </FormControl>
  );
}
