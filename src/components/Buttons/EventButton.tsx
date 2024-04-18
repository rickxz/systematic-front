import { Button, ButtonProps } from "@chakra-ui/react";

interface IEventButtonProps extends ButtonProps {
  event: () => void;
  text: string;
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

export default function EventButton({ event, text, variant="default", ...buttonProps }: IEventButtonProps) {
  const handleClick = () => {
    event();
  };

  const { bgColor, color, hoverBgColor, hoverColor } = variants[variant];

  return (
    <Button 
    bgColor={bgColor} 
    color={color}
    _hover={{ 
      bgColor: hoverBgColor,
      color: hoverColor,
     }}
     
     onClick={handleClick} {...buttonProps}>
      {text}
    </Button>
  );
}
