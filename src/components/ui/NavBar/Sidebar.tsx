import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import DefaultNavigation from "./subcomponents/DefaultNav";
import AccordionNav from "./subcomponents/AccordionNavigation";
import UserInfos from "./subcomponents/UserInfos";
import MenuButton from "./subcomponents/MenuButton";
import { LARGE_SIZE, SMALL_SIZE, conteiner, content } from "./styles/sidebarStyles";

interface ISidebarProps {
  type: string;
  defaultOpen: number;
}

export default function Sidebar({ type, defaultOpen }: ISidebarProps): JSX.Element {
  const [navSize, setNavSize] = useState(LARGE_SIZE);

  const toggleNavSize = (): void => {
    setNavSize(navSize === SMALL_SIZE ? LARGE_SIZE : SMALL_SIZE);
  };

  return (
    <Flex as="nav" w={navSize === SMALL_SIZE ? "75px" : "180px"} sx={conteiner}>
      <Flex sx={content} alignItems={navSize === SMALL_SIZE ? "center" : "flex-start"}>
        <MenuButton onClick={toggleNavSize} />
        {type === "Default" && <DefaultNavigation navSize={navSize} />}
        {type === "Accordion" && <AccordionNav navSize={navSize} defaultOpen={defaultOpen} />}
      </Flex>
      <UserInfos navSize={navSize} />
    </Flex>
  );
}
