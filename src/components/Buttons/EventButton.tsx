import { Button } from "@chakra-ui/react";

interface IEventButtonProps {
  event: () => void;
  text: string;
}
export default function EventButton({ event, text }: IEventButtonProps) {
  return <Button onClick={event}>{text}</Button>;
}
