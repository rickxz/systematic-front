import { Button, ButtonProps } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface iButtonProps extends ButtonProps {
  text: string;
  path?: string;
  variant?: "default" | "dark";
  event?: (() => Promise<void>) | string;
}

const variants = {
  default: {
    bgColor: "#2E4B6C",
    color: "#FFFFFF",
    hoverBgColor: "#C9D9E5",
    hoverColor: "#526D82",
    borderRadius: "5px",
  },
  dark: {
    bgColor: "#FDF0D5",
    color: "#301E1A",
    hoverBgColor: "#301E1A",
    hoverColor: "#FDF0D5",
    borderRadius: "5px",
  },
}

export default function NavButton({ text, path = '', variant = "default", event = '', ...buttonProps }: iButtonProps) {
  const { bgColor, color, hoverBgColor, hoverColor, borderRadius } = variants[variant];

  const handleClick = async () => {
    if (typeof event === "function") {
      await event();
    }
  };

  return (
    <Link to={path}> 
    
      <Button 
        onClick={handleClick}
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
