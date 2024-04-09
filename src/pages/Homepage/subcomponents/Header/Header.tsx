import { Box, Flex } from "@chakra-ui/react";
import HeaderButton from "./subcomponents/HeaderButton";
import HeaderLink from "./subcomponents/HeaderLink";
import { HeaderTheme } from "./HeaterStyle";
import Logo from "./../../../../../public/icons/Logo";

export default function Header() {
  enum LinkTypeEnum {
    GoToOtherPage = "GoToOtherPage",
    StayInSamePage = "StayInSamePage"
  }

  return (
    <Flex sx={HeaderTheme}>
      <Flex width="auto" gap="10%" alignItems={"center"}>
        <Box>
          <Logo type="homepage" />
        </Box>
        <Flex>
          <HeaderLink text="Sobre" id={"sobre"} type={LinkTypeEnum.StayInSamePage}/>
          <HeaderLink text="Tutorias" id={"tutoriais"} type={LinkTypeEnum.StayInSamePage}/>
          <HeaderLink text="Colaboradores" id={"collaborators"} type={LinkTypeEnum.GoToOtherPage}/>
          <HeaderLink text="Contato" id={"contato"} type={LinkTypeEnum.StayInSamePage}/>
          <HeaderLink text="Comunidade" id={"comuinidade"} type={LinkTypeEnum.StayInSamePage}/>
        </Flex>
      </Flex>
      <Flex gap="5%">
        <HeaderButton text="Sing Up" path="/landing" type="Register" />
        <HeaderButton text="Log In" path="/landing" type="Login" />
      </Flex>
    </Flex>
  );
}
