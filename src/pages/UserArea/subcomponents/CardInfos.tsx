import { Box, Text } from "@chakra-ui/react";
import { conteiner, text } from "../styles/CardInfosStyle";

interface ICardInfosProps {
  title: string;
  reviewers: string[];
}

export default function CardInfos({ title, reviewers }: ICardInfosProps) {
  return (
    <Box sx={conteiner}>
      <Text sx={text}>{title}</Text>
      <Text>Reviewers: {reviewers} </Text>
    </Box>
  );
}
