import { Box, Button, Flex } from "@chakra-ui/react";
import HeaderLink from "./subcomponents/HeaderLink";
import { HeaderTheme } from "./HeaterStyle";
import Logo from "../../../../../public/assets/StartLogos/startwhite.png";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import HomepageModal from "../../../../components/Modals/HomepageModal/Index";
import FormLogin from "../../../../components/Modals/HomepageModal/subcomponents/forms/formLogin/Index";
import FormSignup from "../../../../components/Modals/HomepageModal/subcomponents/forms/formSignup/Index";
import { color } from "chart.js/helpers";
import ForgotPassword from "../../../../components/Modals/HomepageModal/subcomponents/forms/recoverPassword";

interface IHeaderProps {
  show: boolean;
}

type IModal = "" | "login" | "signup" | "forgotPassword"

export default function Header({ show }: IHeaderProps) {
  enum LinkTypeEnum {
    GoToOtherPage = "GoToOtherPage",
    StayInSamePage = "StayInSamePage",
  }

  const showLinks = show;
  const [showModal, setShowModal] = useState(false);
  const [openModal, setOpenModal] = useState<IModal>("");
  const [isLoggenIn, setIsLoggedIn] = useState<boolean>(false);

  function handleSignUpModal() {
    setOpenModal("signup");
    setShowModal(true);
  }

  function handleLoginModal() {
    setOpenModal("login");
    setShowModal(true);
  }

  return (
    <>
      <HomepageModal show={showModal} onClose={() => setShowModal(false)}>
        {openModal == "login" &&  <FormLogin redirectForgotPassword={() => setOpenModal("forgotPassword")}/>}
        {openModal == "signup" &&  <FormSignup redirectFormLogin={() => setOpenModal("login")} closeModal={() => setOpenModal("")}/>}
        {openModal == "forgotPassword" &&  <ForgotPassword redirectFormLogin={() => setOpenModal("login")}/>}
      </HomepageModal>

      <Flex sx={HeaderTheme}>
        <Flex width="auto" gap="10%" alignItems={"center"}>
          <Box>
            <Link to={"/"}>
              <Image src={Logo} alt="Start Logo" />
            </Link>
          </Box>
          {showLinks && (
            <Flex>
              <HeaderLink text="Sobre" id={"sobre"} type={LinkTypeEnum.StayInSamePage} />
              <HeaderLink text="Tutorias" id={"tutoriais"} type={LinkTypeEnum.StayInSamePage} />
              <HeaderLink text="Colaboradores" id={"colaboradores"} type={LinkTypeEnum.StayInSamePage} />
              <HeaderLink text="Contato" id={"contato"} type={LinkTypeEnum.StayInSamePage} />
              <HeaderLink text="Comunidade" id={"comuinidade"} type={LinkTypeEnum.StayInSamePage} />
            </Flex>
          )}
        </Flex>
        <Flex gap="5%">
          <Button
           _hover={{ color: "black", backgroundColor: "white" }}
            color={openModal == "signup" && showModal ? "black" : "white"}
            bgColor={openModal == "signup" && showModal ? "white" : "rgba(0,0,0,0)"}
            onClick={handleSignUpModal}
          >
            Sign Up
          </Button>
          { isLoggenIn ?
          <Button 
            _hover={{ color: "black", backgroundColor: "white" }}
            color={openModal == "login" && showModal ? "black" : "white"}
            bgColor={openModal == "login" && showModal ? "white" : "green"}
            onClick={handleLoginModal}
          >
            Bem vindo, usuário
          </Button>
          :
          <Button 
            _hover={{ color: "black", backgroundColor: "white" }}
            color={openModal == "login" && showModal ? "black" : "white"}
            bgColor={openModal == "login" && showModal ? "white" : "rgba(0,0,0,0)"}
            onClick={handleLoginModal}
          >
            Log In
          </Button>
          }
          
        </Flex>
      </Flex>
    </>

  );
}