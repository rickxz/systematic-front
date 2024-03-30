import { Box, Flex } from "@chakra-ui/react";
import HeaderButton from "./subcomponents/HeaderButton";
import HeaderLink from "./subcomponents/HeaderLink";
import { HeaderTheme } from "./HeaterStyle";
import Logo from "./../../../../../public/icons/Logo"

export default function Header() {
    return (
        <Flex sx={HeaderTheme}>
            <Flex width="auto" gap="10%" alignItems={"center"}>
                <Box>
                    <Logo />
                </Box>
                <Flex>
                    <HeaderLink text="Sobre"/>
                    <HeaderLink text="Comunidade"/>
                    <HeaderLink text="Tutorias"/>
                    <HeaderLink text="Contato"/>
                </Flex>
            </Flex>
            <Flex gap="5%">
                <HeaderButton text="Sing Up" path="/landing" type="Register"/>
                <HeaderButton text="Log In" path="/landing" type="Login"/>
            </Flex>
            
        </Flex>
    );
}