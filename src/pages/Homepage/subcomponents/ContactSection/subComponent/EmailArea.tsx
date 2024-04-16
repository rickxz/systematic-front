import { Button, Flex, Heading, Input } from "@chakra-ui/react";

interface EmailAreaInterface{
    title: string,
    buttonText: string
}

export default function EmailArea({title, buttonText}: EmailAreaInterface) {
    return (
        <Flex h="400px" w="400px" bg="gray">
            <Heading fontSize="20">{title}</Heading>
            <Input/>
            <Input/>
            <Input/>
            <Button>{buttonText}</Button>
        </Flex>
    );
}