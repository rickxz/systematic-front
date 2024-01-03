import { Avatar, Divider, Flex, Heading, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import DefaultNavigation from "./subcomponents/DefaultNav";
import AccordionNav from "./subcomponents/AccordionNavigation";

interface ISidebar {
  page: string;
}

export default function Sidebar({ page }: ISidebar) {
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
      <Flex p={"%5"} flexDir={"column"} alignItems={navSize == "small" ? "center" : "flex-start"} as={"nav"}>
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

        {page == "home" && <DefaultNavigation navSize={navSize} />}
        {page == "other" && <AccordionNav navSize={navSize} />}
      </Flex>

      <Flex p={"5%"} flexDir={"column"} w={"100%"} alignItems={"center"} mb={4}>
        <Divider />
        <Flex mt={4} justifyContent={"center"} flexDir={"column"} alignItems={"center"}>
          <Avatar size={"md"} mb={2}></Avatar>
          <Flex flexDir={"column"} ml={4}>
            <Heading display={navSize == "small" ? "none" : "flex"} as={"h3"} size={"sm"}>
              Nome do usuário
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
