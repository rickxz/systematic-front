import { FormControl } from "@chakra-ui/react";
import TextAreaInput from "../Inputs/InputTextArea";
import EventButton from "../Buttons/EventButton";
import { useState } from "react";
import { formcontrol } from "./styles/AddTextFieldStyle";
import useHandleAddText from "../../hooks/tables/useHandleAddText";
import useSendKeywords from "../../hooks/tables/useSendKeywords";
import useSendInclusionCriteria from "../../hooks/tables/useSendInclusionCriteria";
import useSendExclusionCriteria from "../../hooks/tables/useSendExclusionCriterias";

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
  const sendExclusionCriteria = useSendExclusionCriteria();
  const { handleServerOriented } = useHandleAddText();

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddText = () => {
    if(text){
      const data = {
        value: inputValue.trim(),
        text,
        onAddText,
        url,
        setValue: setInputValue
      }
      handleServerOriented(data)
    }  
  };

  return (
    <FormControl sx={formcontrol}>
      <TextAreaInput value={inputValue} label="" placeholder={placeholder} onChange={handleInputChange}></TextAreaInput>
      <EventButton event={handleAddText} text="Add" mt={2} w={"6%"} borderRadius={"8px"}/>
    </FormControl>
  );
}