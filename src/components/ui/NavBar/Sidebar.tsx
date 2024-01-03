import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import DefaultNavigation from "./subcomponents/DefaultNav";
import AccordionNav from "./subcomponents/AccordionNavigation";
import UserInfos from "./subcomponents/UserInfos";
import MenuButton from "./subcomponents/MenuIcon";

enum NavigationType {
  Default = "Default",
  Accordion = "Accordion",
}

interface ISidebarProps {
  type: NavigationType;
}

export default function Sidebar({ type }: ISidebarProps): JSX.Element {
  const [navSize, setNavSize] = useState("large");

  const toggleNavSize = (): void => {
    setNavSize(navSize === "small" ? "large" : "small");
  };

  return (
    <Flex
      as="nav"
      position="sticky"
      left={5}
      h="95vh"
      w={navSize === "small" ? "75px" : "200px"}
      marginTop="2.5vh"
      boxShadow="0 4px 12px 0 rgba(0, 0 , 0, 0.05)"
      flexDir="column"
      justifyContent="space-between"
    >
      <Flex p="%5" flexDir="column" alignItems={navSize === "small" ? "center" : "flex-start"}>
        <MenuButton onClick={toggleNavSize} />
        {type === NavigationType.Default && <DefaultNavigation navSize={navSize} />}
        {type === NavigationType.Accordion && <AccordionNav navSize={navSize} />}
      </Flex>
      <UserInfos navSize={navSize} />
    </Flex>
  );
}
