import { Flex, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import DefaultNavigation from "./subcomponents/DefaultNav";
import AccordionNav from "./subcomponents/AccordionNavigation";
import UserInfos from "./subcomponents/UserInfos";

interface ISidebar {
  type: string;
}

export default function Sidebar({ type }: ISidebar) {
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      as={"nav"}
      position={"sticky"}
      left={5}
      h={"95vh"}
      w={navSize == "small" ? "75px" : "200px"}
      marginTop={"2.5vh"}
      boxShadow={"0 4px 12px 0 rgba(0, 0 , 0, 0.05)"}
      flexDir={"column"}
      justifyContent={"space-between"}
    >
      <Flex p={"%5"} flexDir={"column"} alignItems={navSize == "small" ? "center" : "flex-start"}>
        <IconButton
          background={"none"}
          mt={9}
          _hover={{ background: "none" }}
          icon={<HamburgerIcon />}
          onClick={() => {
            if (navSize == "small") changeNavSize("large");
            else changeNavSize("small");
          }}
          aria-label={""}
        />
        {type == "Default" && <DefaultNavigation navSize={navSize} />}
        {type == "Accordion" && <AccordionNav navSize={navSize} />}
      </Flex>
      <UserInfos navSize={navSize} />
    </Flex>
  );
}
