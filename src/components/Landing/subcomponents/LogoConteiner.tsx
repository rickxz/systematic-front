import { Box, Card } from "@chakra-ui/react";
import { bxconteiner, cardConteiner } from "../styles/LogoConteinerStyles";
import Logo from "../../../../public/assets/StartLogos/startwhite.png";
import { Image } from '@chakra-ui/react';

export default function LogoConteiner() {
  return (
    <Box sx={bxconteiner}>
      {" "}
      <Card sx={cardConteiner} >
        {" "}
        <Image src={Logo} w="18em" objectFit={"contain"}/>
      </Card>
    </Box>
  );
}
