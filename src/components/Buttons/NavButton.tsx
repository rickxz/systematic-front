import { Button, ButtonProps } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface iButtonProps extends ButtonProps {
  text: string;
  path: string;
  variant?: "default" | "dark";
}

const variants = {
  default: {
    bgColor: "#2E4B6C",
    color: "#FFFFFF",
    hoverBgColor: "#C9D9E5",
    hoverColor: "#526D82",
    borderRadius: "3px",
  },
  dark: {
    bgColor: "#FDF0D5",
    color: "#301E1A",
    hoverBgColor: "#301E1A",
    hoverColor: "#FDF0D5",
    borderRadius: "3px",
  },
}

export default function NavButton({ text, path, variant = "default", ...buttonProps }: iButtonProps) {
  const { bgColor, color, hoverBgColor, hoverColor, borderRadius } = variants[variant];
  return (
    <Link to={path}>

      <Button 
        bgColor={bgColor} 
        color={color}
        borderRadius={borderRadius}
        _hover={{ 
          bgColor: hoverBgColor,
          color: hoverColor,
        }}
        {...buttonProps}>
          {text}
      </Button>
           
    </Link>
  );
}
