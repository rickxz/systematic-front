import { Flex, Text } from "@chakra-ui/react";
import Header from "../../../components/ui/Header/Header";
import FlexLayout from "../../../components/ui/Flex/Flex";

export default function Visualization(){
    return (
        <FlexLayout navigationType="Accordion" defaultOpen={2}>
            <Header text="Visualization"/>
            <Flex h="50%" width="100%" align="end" justifyContent="center">
                <Text fontSize="6xl">Recurso em desenvolvimento! </Text>
            </Flex>
        </FlexLayout>
    )
}