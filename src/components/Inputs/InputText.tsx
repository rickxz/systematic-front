import { FormControl, Input } from "@chakra-ui/react";
import SearchButton from "../Buttons/SearchButton";

interface ITextFieldProps {
  placeholder: string;
  type: string;
  nome: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function InputText({ placeholder, type, nome, onChange }: ITextFieldProps) {
  const isSearchField = type === "search";
  return (
    <FormControl display={"flex"} flexDir={"column"} mt={isSearchField ? "" : 10} maxW={"60vw"}>
      <FormControl display={"flex"} flexDir={"row"} gap={".3rem"}>
        <Input
          type={type}
          name={nome}
          placeholder={placeholder}
          onChange={onChange}
          w={isSearchField ? "250px" : "100%"}
        />
        {isSearchField && <SearchButton />}
      </FormControl>
    </FormControl>
  );
}
