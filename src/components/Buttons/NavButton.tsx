import { Button, ButtonProps } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface iButtonProps extends ButtonProps {
  text: string;
  path: string;
}

export default function NavButton({ text, path, ...buttonProps }: iButtonProps) {
  return (
    <Link to={path}>
      <Button {...buttonProps}>{text}</Button>
    </Link>
  );
}
