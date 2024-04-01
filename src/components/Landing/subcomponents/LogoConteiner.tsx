import { Box, Card, Text } from "@chakra-ui/react";
import { bxconteiner, cardConteiner } from "../styles/LogoConteinerStyles";
import Logo from "../../../../public/icons/Logo";

export default function LogoConteiner() {
  return (
    <Box sx={bxconteiner}>
      {" "}
      <Card sx={cardConteiner} >
        {" "}
        <Logo type="ladingpage" />
        <Text mt={"5em"}>Logo da Start Aqui</Text>
      </Card>
    </Box>
  );
}
