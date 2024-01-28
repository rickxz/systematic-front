import { Box, Text } from "@chakra-ui/react";
import EditionIcon from "./EditionIcon";

interface IEditionInfosProps {
  lastEdition: string;
  creation: string;
  isEdited: boolean;
}

export default function EditionInfos({ lastEdition, creation, isEdited }: IEditionInfosProps) {
  return (
    <Box display={"flex"} flexDir={"row"} mt={"1.5rem"} mr={0} ml={5}>
      <EditionIcon isEdited={isEdited} />
      <Box display={"flex"} flexDir={"row"}>
        <Text w={"200px"}>Latest change: {lastEdition}</Text>
        <Text w={"200px"}>Created: {creation}</Text>
      </Box>
    </Box>
  );
}
