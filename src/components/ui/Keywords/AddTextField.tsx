import { FormControl } from "@chakra-ui/react";
import TextAreaInput from "../../Inputs/InputTextArea";
import EventButton from "../../Buttons/EventButton";
import { useState } from "react";

interface IAddTextFieldProps {
  onAddText: (newKeyword: string) => void;
}

export default function AddTextField({ onAddText }: IAddTextFieldProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddText = () => {
    if (inputValue.trim() !== "") {
      setInputValue("");
      onAddText(inputValue.trim());
    } else {
      window.alert("Valor informado é inválido");
    }
  };

  return (
    <FormControl rowGap={5} display={"flex"} flexDir={"column"}>
      <TextAreaInput label="" placeholder="Informe a palavra-chave" onChange={handleInputChange}></TextAreaInput>
      <EventButton event={handleAddText} text="ADD" />
    </FormControl>
  );
}
