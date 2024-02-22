import { Text } from "@chakra-ui/react";

interface iFormOptionsProps {
  text: string;
  active: boolean;
  onClick: () => void;
}

export default function FormOptions({ text, active, onClick }: iFormOptionsProps) {
  return (
    <Text fontWeight={active ? "bold" : ""} color={"teal"} _hover={{ cursor: "pointer" }} onClick={onClick}>
      {text}
    </Text>
  );
}
