import { Button, FormControl } from "@chakra-ui/react";
import TextAreaInput from "../../Inputs/InputTextArea";

interface IKeywordInputProps {
  event: () => void;
}

export default function KeywordInput({ event }: IKeywordInputProps) {
  return (
    <FormControl rowGap={5} display={"flex"} flexDir={"column"}>
      <TextAreaInput label="" placeholder="Informe a palavra-chave"></TextAreaInput>
      <Button onClick={event}>Add</Button>
    </FormControl>
  );
}
