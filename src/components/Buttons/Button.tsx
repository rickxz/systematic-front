import { Button } from "@chakra-ui/react";
import { MouseEventHandler } from "react";

interface iButtonProps {
  text: string;
  onClick?: MouseEventHandler;
}

export default function DefaultButton({ text, onClick }: iButtonProps) {
  return (
    <Button onClick={onClick} w={250} alignSelf={"flex-end"} justifySelf={"baseline"} mt={250} borderRadius={12}>
      {text}
    </Button>
  );
}
