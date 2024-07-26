import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import SearchButton from "../Buttons/SearchButton";
import { conteiner, inputconteiner } from "./styles/inputTextStyle";

interface ITextFieldProps {
  label?: string;
  placeholder: string;
  type: string;
  nome: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
  labelAbove?: boolean; 
}

export default function InputText({ label, placeholder, type, nome, onChange, labelAbove }: ITextFieldProps) {
  const isSearchField = type === "search";

  return (
    <FormControl mt={isSearchField ? "" : 10} w={"60vw"}>
      <FormControl sx={{ ...inputconteiner, flexDirection: labelAbove ? 'column' : 'row' }}>
        {label && (
          <FormLabel
            color={"#2E4B6C"}
            mb={labelAbove ? "0.3rem" : "0"} 
            textAlign="left" 
            width="100%"
            mr={"5px"}
            
          >
            {label}
          </FormLabel>
        )}
        <Input
          type={type}
          name={nome}
          placeholder={placeholder}
          w={isSearchField ? "250px" : "100%"}
          bgColor={"#C9D9E5"}
          borderRadius={"3px"}
          _placeholder={{ opacity: 1, color: "gray.500" }}
          focusBorderColor="#2E4B6C"
          onChange={onChange}
        />
        {isSearchField && <SearchButton />}
      </FormControl>
    </FormControl>
  );
}
