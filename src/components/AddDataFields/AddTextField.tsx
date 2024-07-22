import { FormControl } from "@chakra-ui/react";
import TextAreaInput from "../Inputs/InputTextArea";
import EventButton from "../Buttons/EventButton";
import { useState } from "react";
import { formcontrol } from "./styles/AddTextFieldStyle";
import useSendKeywords from "../../hooks/tables/useSendKeywords";
import useSendInclusionCriteria from "../../hooks/tables/useSendInclusionCriteria";

interface IAddTextFieldProps {
  onAddText: (newKeyword: string) => void;
  placeholder: string;
  url: string;
  text?: string;
}

export default function AddTextField({ onAddText, placeholder, url, text }: IAddTextFieldProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const sendKeywords = useSendKeywords();
  const sendCriterias = useSendInclusionCriteria();


  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddText = () => {
    if (inputValue.trim() !== "") {
      onAddText(inputValue.trim());
      if(text == 'Inclusion criteria'){
        let criteria = {description: inputValue.trim(), type: "INCLUSION"}
        const data = {criteria, url}
        sendCriterias(data);
      }
      if(text == 'Keywords'){
        const data = {
          keyword: inputValue.trim(),
          url
        }
        sendKeywords(data);
      }
      setInputValue("");
    } else {
      window.alert("The field must be filled!");
    }
  };

  return (
    <FormControl sx={formcontrol}>
      <TextAreaInput label="" placeholder={placeholder} onChange={handleInputChange}></TextAreaInput>
      <EventButton event={handleAddText} text="ADD" mt={2} w={"10%"} />
    </FormControl>
  );
}