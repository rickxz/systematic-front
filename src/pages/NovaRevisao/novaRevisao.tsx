import { Box, Flex, Text } from "@chakra-ui/react";
import Sidebar from "../../components/ui/NavBar/Sidebar";

export default function NovaRevisao() {
  return (
    <Flex flexDir={"row"} justifyContent={"space-between"}>
      <Sidebar />

      <Box>
        <Text>Criando nova Revisão Sistemática!</Text>
      </Box>
    </Flex>
  );
}
