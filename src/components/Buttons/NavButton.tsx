import { Button, ButtonProps } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface iButtonProps extends ButtonProps {
  text: string;
  path: string;
}

export default function NavButton({ text, path, ...buttonProps }: iButtonProps) {
  return (
    <Link to={path}>
      <Button bgColor={"#526D82"} color={"#E5EBEF"} 
          _hover={{ 
            bgColor:"#C9D9E5",
            color:"#526D82",
           }}
           {...buttonProps}>{text}</Button>
    </Link>
  );
}
