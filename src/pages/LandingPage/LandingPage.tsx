import { useContext } from "react";
import { Box } from "@chakra-ui/react";
import FlexLayout from "../../components/ui/Flex/Flex";
import { conteiner, content, formConteiner } from "./styles/styles";
import RenderForm from "../../components/Landing/subcomponents/RenderForm";
import FormOptions from "../../components/Landing/subcomponents/FormOptions";
import LogoConteiner from "../../components/Landing/subcomponents/LogoConteiner";
import AppContext from "../../components/Context/AppContext";

export default function LandingPage() {
  const context = useContext(AppContext);

  if (!context) {
    return null;
  }

  return (
    <FlexLayout navigationType="Default" defaultOpen={0}>
      <Box sx={conteiner}>
        <LogoConteiner />
        <Box sx={content}>
          <Box sx={formConteiner}>
            <FormOptions
              text="Login"
              active={context.renderForm === "Login"}
              onClick={() => context.SetRenderForm("Login")}
            />
            <FormOptions
              text="Register"
              active={context.renderForm === "Register"}
              onClick={() => context.SetRenderForm("Register")}
            />
          </Box>
          <RenderForm renderForm={context.renderForm} setRenderForm={context.SetRenderForm} />
        </Box>
      </Box>
    </FlexLayout>
  );
}
