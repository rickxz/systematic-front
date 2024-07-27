import { Box, Text } from "@chakra-ui/react";
import { conteiner, text } from "../styles/CardInfosStyle";

interface ICardInfosProps {
  title: string;
  reviewers: string[];
}

export default function CardInfos({ title, reviewers }: ICardInfosProps) {
  return (
    <Box sx={conteiner}>
      <Text>{title}</Text>
      <Text sx={text}>Reviewers: {reviewers} </Text>
    </Box>
  );
}
