import { Box, Flex, Text } from "@chakra-ui/react"
import Header from "../Homepage/subcomponents/Header/Header";
import Footer from "../Homepage/subcomponents/Footer/Footer";
import CollaboratorCard from "./subcomponents/collaboratorCards";

export default function CollaboratorsPage() {
    return (
        <Flex direction={"column"} justify={"space-between"}>
            <Header />
            <Flex h="100vh" bg="gray.200" align="center" justify="center">
                <CollaboratorCard />                
            </Flex>
            <Footer />
        </Flex>
    );
}