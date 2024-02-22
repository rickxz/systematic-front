import { Box, Card, Text } from "@chakra-ui/react";

export default function LogoConteiner() {
  return (
    <Box ml={"3em"} pb={"5em"} alignContent={"center"} textAlign={"center"}>
      {" "}
      <Card w={400} h={200} textAlign={"center"} fontWeight={"bold"} bgColor={"teal"}>
        {" "}
        <Text mt={"5em"}>Logo da Start Aqui</Text>
      </Card>
    </Box>
  );
}
