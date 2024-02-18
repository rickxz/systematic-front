import { Box, Card, Icon, Text } from "@chakra-ui/react";
import { FaFile } from "react-icons/fa";
import EventButton from "../../components/Buttons/EventButton";

export default function UploadBox() {
  return (
    <Box
      ml={"10%"}
      display={"flex"}
      flexDir={"column"}
      rowGap={10}
      width={"50%"}
      justifyContent={"flex-start"}
      textAlign={"initial"}
    >
      <Text fontWeight={"bold"} fontSize={18}>
        Import reference file:{" "}
      </Text>
      <Card h={200} w={"100%"} textAlign={"center"} justifyContent={"center"}>
        <Icon as={FaFile} w={"60px"} h={"60px"} justifySelf={"center"} alignSelf={"center"} ml={"0.5rem"} mb={5} />
        Insert file here
      </Card>
      <EventButton
        event={function (): void {
          window.alert("Duplicated papers are Removed");
        }}
        text={"Remove all Duplicated Papers"}
        w={"fit-content"}
      />
    </Box>
  );
}
