import EditionIcon from "./EditionIcon";
import { Box, Text } from "@chakra-ui/react";
import { conteiner, infosconteiner, text } from "../styles/EditionINfosStyles";

interface IEditionInfosProps {
  status: string;
  creation: string;
  // isEdited: boolean;
}

export default function EditionInfos({ status, creation, /* isEdited */ }: IEditionInfosProps) {
  return (
    <Box sx={conteiner}>
      {/* <EditionIcon/> */}
      <Box sx={infosconteiner}>
        <Text sx={text}>status: {status}</Text>
        <Text sx={text}>Created: {creation}</Text>
      </Box>
    </Box>
  );
}
