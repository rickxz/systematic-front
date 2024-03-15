import { useState } from "react";
import { Box } from "@chakra-ui/react";
import GridLayout from "../../components/ui/Grid/Grid";
import { conteiner, content, formConteiner } from "./styles/styles";
import RenderForm from "../../components/Landing/subcomponents/RenderForm";
import FormOptions from "../../components/Landing/subcomponents/FormOptions";
import LogoConteiner from "../../components/Landing/subcomponents/LogoConteiner";

export default function LandingPage() {
  const [renderForm, SetRenderForm] = useState("Login");

  return (
    <GridLayout navigationType="Default">
      <Box sx={conteiner}>
        <LogoConteiner />
        <Box sx={content}>
          <Box sx={formConteiner}>
            <FormOptions text="Login" active={renderForm === "Login"} onClick={() => SetRenderForm("Login")} />
            <FormOptions text="Register" active={renderForm === "Register"} onClick={() => SetRenderForm("Register")} />
          </Box>
          <RenderForm renderForm={renderForm} setRenderForm={SetRenderForm} />
        </Box>
      </Box>
    </GridLayout>
  );
}
