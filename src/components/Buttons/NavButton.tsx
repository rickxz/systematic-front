import { Button, ButtonProps } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface iButtonProps extends ButtonProps {
  text: string;
  path: string;
  variant?: "default" | "dark";
}

const variants = {
  default: {
    bgColor: "#526D82",
    color: "#E5EBEF",
    hoverBgColor: "#C9D9E5",
    hoverColor: "#526D82",
  },
  dark: {
    bgColor: "#FDF0D5",
    color: "#301E1A",
    hoverBgColor: "#301E1A",
    hoverColor: "#FDF0D5",
  },
}

export default function NavButton({ text, path, variant = "default", ...buttonProps }: iButtonProps) {
  const { bgColor, color, hoverBgColor, hoverColor } = variants[variant];
  return (
    <Link to={path}>

      <Button bgColor={bgColor} color={color}
          _hover={{ 
            bgColor: hoverBgColor,
            color: hoverColor,
           }}
           {...buttonProps}>{text}
      </Button>
           
    </Link>
  );
}
