import { Box, Text } from "@chakra-ui/react";
import { conteiner, text, titleSX } from "../styles/CardInfosStyle";

interface ICardInfosProps {
  title: string;
  lastModification: string;
}

export default function CardInfos({ title, lastModification }: ICardInfosProps) {
  return (
    <Box sx={conteiner} >
      <Text sx={titleSX}>{title}</Text>
      <Text sx={text}>Last modification: {lastModification} </Text>
    </Box>
  );
}
