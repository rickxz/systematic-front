import { Avatar, Divider, Flex, Heading, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { FaHome } from "react-icons/fa";
import { SiAddthis } from "react-icons/si";
import { useState } from "react";
import NavItem from "./NavItem";

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
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
        <NavItem navSize={navSize} icon={FaHome} title="Página Principal" />
        <NavItem navSize={navSize} icon={SiAddthis} title="Nova Revisão" />
        <NavItem navSize={navSize} icon={FaHome} title="Outra Página" />
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
