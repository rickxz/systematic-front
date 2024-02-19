import { useState } from "react";
import { FormControl, FormLabel, Input, InputGroup } from "@chakra-ui/react";
import EventButton from "../Buttons/EventButton";

interface iPasswordProps {
  text: string;
}

export default function PasswordInput({ text }: iPasswordProps) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <FormControl>
      <FormLabel>{text}</FormLabel>
      <InputGroup size="md">
        <Input pr="4.5rem" type={show ? "text" : "password"} placeholder="Enter password" w={"50%"} />
        <EventButton event={handleClick} text={"show"} />
      </InputGroup>
    </FormControl>
  );
}
