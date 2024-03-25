import { Box, Text } from "@chakra-ui/react";
import { conteiner, text } from "../styles/CardInfosStyle";

interface ICardInfosProps {
  title: string;
  RevisorNames: string[];
}

export default function CardInfos({ title, RevisorNames }: ICardInfosProps) {
  return (
    <Box sx={conteiner}>
      <Text sx={text}>{title}</Text>
      <Text>Reviewer: {RevisorNames} </Text>
    </Box>
  );
}
