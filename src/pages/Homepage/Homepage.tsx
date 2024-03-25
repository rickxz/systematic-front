import { Box, Flex, Text } from "@chakra-ui/react";
import Header from "./subcomponents/Header";
import Footer from "./subcomponents/Footer";

export default function Homepage() {
  return (
    <Box height={"80vh"}>
        <Header />

        <Flex bg="gray.200" h="80%">
            <Text color="black">Body</Text>
        </Flex>

        <Footer />
    </Box>
  );
}


