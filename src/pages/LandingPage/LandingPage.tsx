import { useState } from "react";
import { Box } from "@chakra-ui/react";
import GridLayout from "../../components/ui/Grid/Grid";
import RenderForm from "../../components/Landing/subcomponents/RenderForm";
import FormOptions from "../../components/Landing/subcomponents/FormOptions";
import LogoConteiner from "../../components/Landing/subcomponents/LogoConteiner";

export default function LandingPage() {
  const [renderForm, SetRenderForm] = useState("Login");

  return (
    <GridLayout navigationType="Default">
      <Box
        borderWidth={"1px"}
        borderRadius={"lg"}
        display={"flex"}
        flexDir={"row"}
        justifyContent={"space-between"}
        alignItems={"center"}
        mt={"9em"}
        mb={20}
        h={"500px"}
        gap={10}
      >
        <LogoConteiner />
        <Box display={"flex"} flexDir={"column"} gap={1} justifyContent={"flex-end"} w={"50%"} mt={"5em"} ml={"5em"}>
          <Box display={"flex"} flexDir={"row"} gap={4} mb={3}>
            <FormOptions text="Login" active={renderForm === "Login"} onClick={() => SetRenderForm("Login")} />
            <FormOptions text="Register" active={renderForm === "Register"} onClick={() => SetRenderForm("Register")} />
          </Box>
          <RenderForm renderForm={renderForm} setRenderForm={SetRenderForm} />
        </Box>
      </Box>
    </GridLayout>
  );
}
