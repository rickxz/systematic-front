import { Avatar, Divider, Flex, Heading, IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";

export default function Sidebar() {
  const [navSize, changeNavSize] = useState("large");
  return (
    <Flex
      position={"sticky"}
      left={5}
      h={"95vh"}
      w={"10vw"}
      marginTop={"2.5vh"}
      boxShadow={"0 4px 12px 0 rgba(0, 0 , 0, 0.05)"}
      flexDir={"column"}
      justifyContent={"space-between"}
    >
      <Flex p={"%5"} flexDir={"column"} alignItems={"flex-start"} as={"nav"}>
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
        ></IconButton>
      </Flex>

      <Flex p={"5%"} flexDir={"column"} w={"100%"} alignItems={"center"} mb={4}>
        <Divider />
        <Flex mt={4} justifyContent={"center"} flexDir={"column"} alignItems={"center"}>
          <Avatar size={"md"}></Avatar>
          <Flex flexDir={"column"} ml={4}>
            <Heading as={"h3"} size={"sm"}>
              User Name
            </Heading>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}
