import { Box, Button, Flex , Text} from "@chakra-ui/react";
import { IoLibrary } from "react-icons/io5";
import HeaderButton from "./subcomponents/HeaderButton";
import HeaderLink from "./subcomponents/HeaderLink";

export default function Header() {
    return (
        <Flex bg="gray.800" padding={"20px"} width={"100%"} justifyContent={"space-between"}>
            <Flex width="auto" gap="20%" alignItems={"center"}>
                <Box>
                    <IoLibrary color="white" size="40"/>
                </Box>
                <Flex gap="20%">
                    <HeaderLink text="Sobre"/>
                    <HeaderLink text="Comunidade"/>
                    <HeaderLink text="Tutorias"/>
                    <HeaderLink text="Contato"/>
                </Flex>
            </Flex>
            <Flex gap="20%">
                <HeaderButton text="Sing Up"/>
                <HeaderButton text="Log In"/>
            </Flex>
            
        </Flex>
    );
}