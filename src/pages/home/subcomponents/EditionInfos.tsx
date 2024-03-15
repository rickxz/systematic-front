import EditionIcon from "./EditionIcon";
import { Box, Text } from "@chakra-ui/react";
import { conteiner, infosconteiner, text } from "../styles/EditionINfosStyles";

interface IEditionInfosProps {
  lastEdition: string;
  creation: string;
  isEdited: boolean;
}

export default function EditionInfos({ lastEdition, creation, isEdited }: IEditionInfosProps) {
  return (
    <Box sx={conteiner}>
      <EditionIcon isEdited={isEdited} />
      <Box sx={infosconteiner}>
        <Text sx={text}>Latest change: {lastEdition}</Text>
        <Text sx={text}>Created: {creation}</Text>
      </Box>
    </Box>
  );
}
