import { FormControl, Input } from "@chakra-ui/react";
import SearchButton from "../Buttons/SearchButton";
import { conteiner, inputconteiner } from "./styles/inputTextStyle";

interface ITextFieldProps {
  placeholder: string;
  type: string;
  nome: string;
  setSearchString: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputText({ placeholder, type, nome, setSearchString }: ITextFieldProps) {
  const isSearchField = type === "search";
  

  return (
    <FormControl mt={isSearchField ? "" : 10} sx={conteiner}>
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
          onChange={(e) => (setSearchString(e.target.value))}
        />
        {isSearchField && <SearchButton />}
      </FormControl>
    </FormControl>
  );
}
