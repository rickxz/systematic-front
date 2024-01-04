import { Box, Text } from "@chakra-ui/react";

interface ICardInfosProps {
  title: string;
  RevisorNames: string[];
}
export default function CardInfos({ title, RevisorNames }: ICardInfosProps) {
  return (
    <Box display={"flex"} flexDir={"column"} ml={"4.4rem"} alignSelf={"center"} justifySelf={"center"} rowGap={"0.5em"}>
      <Text as={"h4"} w={"26em"}>
        {title}
      </Text>
      <Text>Revisores: {RevisorNames} </Text>
    </Box>
  );
}
