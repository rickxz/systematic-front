import { Button, ButtonProps } from "@chakra-ui/react";

interface IEventButtonProps extends ButtonProps {
  event: (newKeyword: string) => void;
  text: string;
}

export default function EventButton({ event, text, ...buttonProps }: IEventButtonProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = (_e: React.MouseEvent<HTMLButtonElement>) => {
    const newKeyword = "valor_da_nova_palavra_chave";
    event(newKeyword);
  };

  return (
    <Button onClick={handleClick} {...buttonProps}>
      {text}
    </Button>
  );
}
