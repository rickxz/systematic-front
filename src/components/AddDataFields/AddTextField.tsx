import { FormControl } from "@chakra-ui/react";
import TextAreaInput from "../Inputs/InputTextArea";
import EventButton from "../Buttons/EventButton";
import { useState } from "react";
import { formcontrol } from "./styles/AddTextFieldStyle";

interface IAddTextFieldProps {
  onAddText: (newKeyword: string) => void;
  text: string;
}

export default function AddTextField({ onAddText, text }: IAddTextFieldProps) {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddText = () => {
    if (inputValue.trim() !== "") {
      onAddText(inputValue.trim());
      setInputValue("");
    } else {
      window.alert("The field must be filled!");
    }
  };

  return (
    <FormControl sx={formcontrol}>
      <TextAreaInput label="" placeholder={text} onChange={handleInputChange}></TextAreaInput>
      <EventButton event={handleAddText} text="ADD" mt={2} w={"10%"} />
    </FormControl>
  );
}
