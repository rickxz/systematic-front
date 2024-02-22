import { Input } from "@chakra-ui/react";

interface iInputProps {
  id: string;
  placeholder: string;
  handlechange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RegisterInputs({ id, placeholder, handlechange }: iInputProps) {
  return <Input id={id} placeholder={placeholder} type={"text"} onChange={handlechange} />;
}
