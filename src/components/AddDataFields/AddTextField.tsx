import { FormControl } from "@chakra-ui/react";
import TextAreaInput from "../Inputs/InputTextArea";
import EventButton from "../Buttons/EventButton";
import { useState } from "react";
import { formcontrol } from "./styles/AddTextFieldStyle";
import useSendKeywords from "../../hooks/tables/useSendKeywords";

interface IAddTextFieldProps {
  onAddText: (newKeyword: string) => void;
  text: string;
  url: string;
}

export default function AddTextField({ onAddText, text, url }: IAddTextFieldProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const sendKeywords = useSendKeywords();


  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddText = () => {
    if (inputValue.trim() !== "") {
      onAddText(inputValue.trim());
      const data = {
        keyword: inputValue.trim(),
        url
      }
      sendKeywords(data);
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