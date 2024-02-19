import { SetStateAction, useState } from "react";
import { FormControl, FormLabel, Input, InputGroup } from "@chakra-ui/react";
import EventButton from "../Buttons/EventButton";

interface iPasswordProps {
  text: string;
  handlechange: (e: { target: { value: SetStateAction<string> } }) => void;
  isValid?: boolean;
}

export default function PasswordInput({ text, handlechange, isValid }: iPasswordProps) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl display={"flex"} flexDir={"column"}>
      <FormLabel>{text}</FormLabel>
      <InputGroup size="md" display={"flex"}>
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter password"
          w={"50%"}
          onChange={handlechange}
          errorBorderColor={isValid === false ? "red" : ""}
        />
        <EventButton event={handleClick} text={show ? "Hide" : "Show"} />
      </InputGroup>
    </FormControl>
  );
}
