import { Box, Button, Flex , Text} from "@chakra-ui/react";
import { IoLibrary } from "react-icons/io5";

export default function Header() {
    return (
        <Flex bg="gray.800" padding={"20px"} width={"100%"} justifyContent={"space-between"}>
            <Flex width="auto" gap="20%" alignItems={"center"}>
                <Box>
                    <IoLibrary color="white" size="40"/>
                </Box>
                <Flex gap="20%">
                    <Text color="white" fontSize='2xl'>Sobre</Text>
                    <Text color="white" fontSize='2xl'>Comunidade</Text>
                    <Text color="white" fontSize='2xl'>Tutorias</Text>
                    <Text color="white" fontSize='2xl'>Contato</Text>
                </Flex>
            </Flex>

            <Flex gap="20%">
                <Button>Sing Up</Button>
                <Button>Log In</Button>
            </Flex>
            
        </Flex>
    );
}