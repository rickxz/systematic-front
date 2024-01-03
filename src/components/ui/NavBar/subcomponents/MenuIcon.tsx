import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";

interface MenuButtonProps {
  onClick: () => void;
}

export default function MenuButton({ onClick }: MenuButtonProps): JSX.Element {
  return (
    <IconButton
      background="none"
      mt={9}
      _hover={{ background: "none" }}
      icon={<HamburgerIcon />}
      onClick={onClick}
      aria-label=""
    />
  );
}
