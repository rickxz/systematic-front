import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  FormLabel,
} from '@chakra-ui/react'
import { useState } from 'react';

interface INumberInputProps {
    label: string;
    onChange?: any;
  }

export default function SNumberInput({label, onChange}: INumberInputProps) {
   
  const [value, setValue] = useState(0);

  const handleChange = (newValue: any) => {
    setValue(newValue);
  };

  console.log(value);

    return (
      <FormControl maxW={"60vw"}>
        <FormLabel>{label}</FormLabel>
          <NumberInput value={value} onChange={handleChange}>
              <NumberInputField/>
              <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
              </NumberInputStepper>
          </NumberInput>
      </FormControl>
    );
}