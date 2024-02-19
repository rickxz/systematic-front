import { FormControl, FormLabel, Input } from "@chakra-ui/react";

interface iEmailInputProps {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export default function EmailInput({ handleChange }: iEmailInputProps) {
  return (
    <FormControl display={"flex"} flexDir={"column"} mt={10} maxW={"60vw"}>
      <FormLabel>Email:</FormLabel>
      <Input type="text" placeholder="Enter your best email here..." w={"100%"} onChange={handleChange} />
    </FormControl>
  );
}
