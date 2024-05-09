import { FormControl, Input } from "@chakra-ui/react";
import SearchButton from "../Buttons/SearchButton";
import { conteiner, inputconteiner } from "./styles/inputTextStyle";

interface ITextFieldProps {
  placeholder: string;
  type: string;
  nome: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function InputText({ placeholder, type, nome, onChange }: ITextFieldProps) {
  const isSearchField = type === "search";

  return (
    <FormControl mt={isSearchField ? "" : 10} sx={conteiner}>
      <FormControl sx={inputconteiner}>
        <Input
          type={type}
          name={nome}
          placeholder={placeholder}
          onChange={onChange}
          w={isSearchField ? "250px" : "100%"}
          bgColor={"#C9D9E5"}
          borderRadius={"3px"}
          _placeholder={{ opacity: 1, color: "gray.500" }}
          focusBorderColor="#526D82"
        />
        {isSearchField && <SearchButton />}
      </FormControl>
    </FormControl>
  );
}
