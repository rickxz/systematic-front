import { SetStateAction } from "react";
import { FormControl, Input, InputGroup } from "@chakra-ui/react";

interface iPasswordProps {
  text: string;
  handlechange: (e: { target: { value: SetStateAction<string> } }) => void;
  isValid?: boolean;
}

export default function PasswordInput({ text, handlechange, isValid }: iPasswordProps) {
  return (
    <FormControl display={"flex"} flexDir={"column"}>
      <InputGroup size="md" display={"flex"}>
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
