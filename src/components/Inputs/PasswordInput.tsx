import { SetStateAction } from "react";
import { FormControl, Input, InputGroup } from "@chakra-ui/react";
import { formControl, inputGroup } from "./styles/PasswordInputStyle";

interface iPasswordProps {
  text: string;
  handlechange: (e: { target: { value: SetStateAction<string> } }) => void;
  isValid?: boolean;
}

export default function PasswordInput({ text, handlechange, isValid }: iPasswordProps) {
  return (
    <FormControl sx={formControl}>
      <InputGroup sx={inputGroup}>
        <Input
          pr="4.5rem"
          type={"password"}
          placeholder={text}
          onChange={handlechange}
          errorBorderColor={isValid === false ? "red" : ""}
        />
      </InputGroup>
    </FormControl>
  );
}
