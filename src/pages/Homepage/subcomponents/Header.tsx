import { Button, Flex , Icon, Text} from "@chakra-ui/react";

export default function Header() {
    return (
        <Flex bg="gray.800" padding={"20px"} width={"100%"} justifyContent={"space-between"}>
            <Flex width="auto" gap="20%">
                <Icon color="white"/>
                <Flex gap="20%">
                    <Text color="white">Sobre</Text>
                    <Text color="white">Comunidade</Text>
                    <Text color="white">Tutorias</Text>
                    <Text color="white">Contato</Text>
                </Flex>
            </Flex>

            <Flex gap="20%">
                <Button>Sing Up</Button>
                <Button>Log In</Button>
            </Flex>
            
        </Flex>
    );
}