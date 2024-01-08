import { FormControl } from "@chakra-ui/react";
import TextAreaInput from "../../Inputs/InputTextArea";
import EventButton from "../../Buttons/EventButton";
import { useState } from "react";

interface IKeywordInputProps {
  onAddKeyword: (newKeyword: string) => void;
}

export default function KeywordInput({ onAddKeyword }: IKeywordInputProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddKeyword = () => {
    if (inputValue.trim() !== "") {
      setInputValue("");
      onAddKeyword(inputValue.trim());
    } else {
      window.alert("Valor informado é inválido");
    }
  };

  return (
    <FormControl rowGap={5} display={"flex"} flexDir={"column"}>
      <TextAreaInput label="" placeholder="Informe a palavra-chave" onChange={handleInputChange}></TextAreaInput>
      <EventButton event={handleAddKeyword} text="ADD" />
    </FormControl>
  );
}
