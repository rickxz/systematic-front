import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import DefaultNavigation from "./subcomponents/DefaultNav";
import AccordionNav from "./subcomponents/AccordionNavigation";
import UserInfos from "./subcomponents/UserInfos";
import MenuButton from "./subcomponents/MenuButton";

const SMALL_SIZE = "small";
const LARGE_SIZE = "large";

interface ISidebarProps {
  type: string;
}

export default function Sidebar({ type }: ISidebarProps): JSX.Element {
  const [navSize, setNavSize] = useState(LARGE_SIZE);

  const toggleNavSize = (): void => {
    setNavSize(navSize === SMALL_SIZE ? LARGE_SIZE : SMALL_SIZE);
  };

  return (
    <Flex
      as="nav"
      position="sticky"
      left={5}
      h="95vh"
      w={navSize === SMALL_SIZE ? "75px" : "200px"}
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0 , 0, 0.05)"
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex p="%5" flexDir="column" alignItems={navSize === SMALL_SIZE ? "center" : "flex-start"}>
        <MenuButton onClick={toggleNavSize} />
        {type === "Default" && <DefaultNavigation navSize={navSize} />}
        {type === "Accordion" && <AccordionNav navSize={navSize} />}
      </Flex>
      <UserInfos navSize={navSize} />
    </Flex>
  );
}
