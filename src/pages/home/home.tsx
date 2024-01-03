import { Box, Flex, Text } from "@chakra-ui/react";
import Sidebar from "../../components/ui/NavBar/Sidebar";

export default function Home() {
  return (
    <Flex flexDir={"row"} justifyContent={"space-between"}>
      {" "}
      <Sidebar />
      <Box>
        <Text>Você está na página principal!</Text>
      </Box>
    </Flex>
  );
}
