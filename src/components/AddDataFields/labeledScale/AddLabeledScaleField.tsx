import { FormControl, FormLabel, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper } from "@chakra-ui/react";
import TextAreaInput from "../../Inputs/InputTextArea";
import EventButton from "../../Buttons/EventButton";
import { useState } from "react";
import { formcontrol } from "../styles/AddTextFieldStyle";

interface IAddTextFieldProps {
  onAddText: (newKeyword: {label: string, value: number}) => void;
  text: string;
}

export default function AddLabeledListField({ onAddText, text }: IAddTextFieldProps) {
  const [inputValue, setInputValue] = useState<string>("");
  const [value, setValue] = useState(0);

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const handleAddText = () => {
    if (inputValue.trim() !== "") {
      onAddText({label: inputValue.trim(), value});
      setInputValue("");
    } else {
      window.alert("The field must be filled!");
    }
  };

  return (
    <FormControl sx={formcontrol}>
      <TextAreaInput value={inputValue} label="" placeholder={text} onChange={handleInputChange} />
      
      <FormLabel>Value</FormLabel>
      <NumberInput mb={"2rem"} defaultValue={0} onChange={(valueAsString: string, valueAsNumber: number) => {
        
        if(!isNaN(valueAsNumber)) setValue(valueAsNumber);
        
        }}>
        
          <NumberInputField />
          <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
          </NumberInputStepper>
      
      </NumberInput>

      <EventButton event={handleAddText} text="ADD" mt={2} w={"10%"} />
    </FormControl>
  );
}
