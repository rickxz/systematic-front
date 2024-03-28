import { Box, Flex, Text } from "@chakra-ui/react"
import Header from "../Homepage/subcomponents/Header/Header";
import Footer from "../Homepage/subcomponents/Footer/Footer";
import Article from "../Homepage/subcomponents/Article/Article";

export default function CollaboratorsPage() {
    return (
        <Flex direction={"column"} justify={"space-between"}>
            <Header />
            <Flex h="100vh" bg="gray.200" align="center" justify="center">
                <Box h="100px" w="100px" bg="black"></Box>
                
            </Flex>
            <Footer />
        </Flex>
    );
}