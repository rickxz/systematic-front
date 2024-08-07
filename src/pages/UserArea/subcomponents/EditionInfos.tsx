// import EditionIcon from "./EditionIcon";
import { Box, Text } from "@chakra-ui/react";
import { conteiner, infosconteiner, text } from "../styles/EditionINfosStyles";

interface IEditionInfosProps {
  status: string;
  reviewers: string[]
  // isEdited: boolean;
}

export default function EditionInfos({ reviewers, status, /* isEdited */ }: IEditionInfosProps) {
  return (
    <Box sx={conteiner}>
      {/* <EditionIcon/> */}
      <Box sx={infosconteiner}>
        <Text sx={text}>Status: {status}</Text>
        <Text sx={text}>Reviewers: {reviewers}</Text>
      </Box>
    </Box>
  );
}
