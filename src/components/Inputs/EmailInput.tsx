import { SetStateAction } from "react";
import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface iEmailInputProps {
  handleChange: (e: { target: { value: SetStateAction<string> } }) => void;
}
export default function EmailInput({ handleChange }: iEmailInputProps) {
  return (
    <FormControl display={"flex"} flexDir={"column"} mt={10} maxW={"60vw"}>
      <FormLabel>Email:</FormLabel>
      <Input type="text" w={"100%"} onChange={handleChange} />
    </FormControl>
  );
}
