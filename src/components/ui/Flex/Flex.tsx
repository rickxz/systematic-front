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
    <Flex direction={"row"} justify={"space-between"} w={"100%"} alignItems={"center"} bgColor={"#E5EBEF"}>
      <Box
        w={"fit-content"}
        overflow={"scroll"}
        bgColor={"#282828"}
        sx={{
          "&::-webkit-scrollbar": {
            width: "8px",
            borderRadius: "8px",
            backgroundColor: "#282828",
            height: "100%",
          },
          "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#282828",
            borderRadius: "8px",
          },
        }}
      >
        <Sidebar type={navigationType} defaultOpen={defaultOpen} />
      </Box>
      <Box sx={style} w={"100%"} h={"100vh"} overflow={"auto"}>
        {children}
      </Box>
    </Flex>
  );
}
