import { FormControl } from "@chakra-ui/react";
import TextAreaInput from "../../Inputs/InputTextArea";
import EventButton from "../../Buttons/EventButton";

interface IKeywordInputProps {
  event: () => void;
}

export default function KeywordInput({ event }: IKeywordInputProps) {
  return (
    <FormControl rowGap={5} display={"flex"} flexDir={"column"}>
      <TextAreaInput label="" placeholder="Informe a palavra-chave"></TextAreaInput>
      <EventButton event={event} text="ADD" />
    </FormControl>
  );
}
