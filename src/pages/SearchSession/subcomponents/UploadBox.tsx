import { Box, Card, Text } from "@chakra-ui/react";
import UploadIcon from "../../../components/Icons/UploadIcon";
import EventButton from "../../../components/Buttons/EventButton";
import { conteiner, label, uploadbox } from "../styles/uploadBoxStyle";

export default function UploadBox() {
  return (
    <Box sx={conteiner}>
      <Text sx={label}>Import reference file: </Text>
      <Card sx={uploadbox}>
        <UploadIcon />
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
