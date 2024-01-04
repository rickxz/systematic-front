import { Button } from "@chakra-ui/react";

interface IButtonProps {
  text: string;
}
export default function EnterRevisionButton({ text }: IButtonProps) {
  return (
    <Button ml={"100%"} mt={4} w={"106px"} h={"25px"}>
      {text}
    </Button>
  );
}
