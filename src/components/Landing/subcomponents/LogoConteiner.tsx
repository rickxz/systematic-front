import { Box, Card, Text } from "@chakra-ui/react";
import { bxconteiner, cardConteiner } from "../styles/LogoConteinerStyles";

export default function LogoConteiner() {
  return (
    <Box sx={bxconteiner}>
      {" "}
      <Card sx={cardConteiner}>
        {" "}
        <Text mt={"5em"}>Logo da Start Aqui</Text>
      </Card>
    </Box>
  );
}
