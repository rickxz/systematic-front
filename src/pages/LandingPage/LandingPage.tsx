import { useContext } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Header from "../Homepage/subcomponents/Header/Header";
import AppContext from "../../components/Context/AppContext";
import { conteiner, content, formConteiner } from "./styles/styles";
import RenderForm from "../../components/Landing/subcomponents/RenderForm";
//import FormOptions from "../../components/Landing/subcomponents/FormOptions";

export default function LandingPage() {
  const context = useContext(AppContext);

  if (!context) {
    return null;
  }

  return (
    <Flex flexDir={"column"}>
      <Header show={false} />
      <Box sx={conteiner}>
        <Box sx={content}>
          <Box sx={formConteiner}>
            {/*<FormOptions
              text="Login"
              active={context.renderForm === "Login"}
              onClick={() => context.SetRenderForm("Login")}
            />
            <FormOptions
              text="Register"
              active={context.renderForm === "Register"}
              onClick={() => context.SetRenderForm("Register")}
  />*/}
          </Box>
          <RenderForm renderForm={context.renderForm} setRenderForm={context.SetRenderForm} />
        </Box>
      </Box>
    </Flex>
  );
}
