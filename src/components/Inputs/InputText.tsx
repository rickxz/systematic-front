import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import SearchButton from "../Buttons/SearchButton";

interface ITextFieldProps {
  label: string;
  placeholder: string;
  type: string;
  nome: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}

export default function InputText({ label, placeholder, type, nome, onChange }: ITextFieldProps) {
  const isSearchField = type === "search";
  return (
    <FormControl display={"flex"} flexDir={"column"} mt={isSearchField ? "" : 10} maxW={"60vw"}>
      <FormLabel>{label}</FormLabel>
      <FormControl display={"flex"} flexDir={"row"} gap={".3rem"}>
<<<<<<< HEAD
        <Input
          type={type}
          name={nome}
          placeholder={placeholder}
          onChange={onChange}
          w={isSearchField ? "250px" : "100%"}
        />
=======
        <Input type={type} name={nome} placeholder={placeholder} w={isSearchField ? "250px" : "100%"} />
>>>>>>> barChart
        {isSearchField && <SearchButton />}
      </FormControl>
    </FormControl>
  );
}
