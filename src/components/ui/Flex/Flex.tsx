import { style } from "./FlexStyle";
import Sidebar from "../NavBar/Sidebar";
import { Flex, Box } from "@chakra-ui/react";

interface iFlexLayout {
  navigationType: string;
  children: React.ReactElement | React.ReactElement[];
  defaultOpen: number;
}

export default function FlexLayout({ navigationType, children, defaultOpen }: iFlexLayout) {
  return (
    <Flex direction={"row"} justify={"space-between"} w={"fit-content"} alignItems={"center"}>
      <Sidebar type={navigationType} defaultOpen={defaultOpen} />
      <Box sx={style}>{children}</Box>
    </Flex>
  );
}
