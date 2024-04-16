import { Flex, Icon, Text } from "@chakra-ui/react";

interface ContactInterface{
    icon: string,
    title: string,
    text: string
}

export default function ContactCard({icon, title, text}: ContactInterface) {
    return (
        <Flex w="200px" h="200px" bg="gray" alignItems="center" direction={"column"} p="20px">
            <Icon/>
            <Text>{title}</Text>
            <Text>{text}</Text>
        </Flex>    
    );
}