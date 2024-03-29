import { Box, Flex, Image, Text } from "@chakra-ui/react";

interface CollaboratorType {
    src: string,
    alt: string,
    name: string,
}

export default function CollaboratorCard({src, alt, name}: CollaboratorType) {
    return (
        <>
            <Flex bg="gray.600" p="100px" direction="column" alignItems="center">
                <Image src={src} alt={alt}
                 borderRadius="30px" 
                 h="200px"
                 w="200px"
                 />
                <Text>{name}</Text>
            </Flex>
        </>
    );
}