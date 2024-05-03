import { useContext } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Header from "../Homepage/subcomponents/Header/Header";
import AppContext from "../../components/Context/AppContext";
import { conteiner, content, formConteiner } from "./styles/styles";
import RenderForm from "../../components/Landing/subcomponents/RenderForm";

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
          <Box sx={formConteiner}></Box>
          <RenderForm renderForm={context.renderForm} setRenderForm={context.SetRenderForm} />
        </Box>
      </Box>
    </Flex>
  );
}
