import { Button } from "@chakra-ui/react";

interface IButtonProps {
  text: string;
}
export default function EnterRevisionButton({ text }: IButtonProps) {
  return (
    <Button ml={"15rem"} mt={4} w={"100px"} h={"25px"}>
      {text}
    </Button>
  );
}
