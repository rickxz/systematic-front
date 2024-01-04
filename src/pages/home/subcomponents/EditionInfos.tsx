import { Box, Icon, Text } from "@chakra-ui/react";
import { FaRegCircle } from "react-icons/fa6";

interface IEditionInfosProps {
  lastEdition: string;
  creation: string;
  isEdited: boolean;
}

export default function EditionInfos({ lastEdition, creation, isEdited }: IEditionInfosProps) {
  return (
    <Box display={"flex"} flexDir={"row"} justifyContent={"space-between"} ml={"20%"} mt={"1.5rem"}>
      <Icon as={FaRegCircle} size={"md"} color={!isEdited ? "green" : "yellow"} mt={1.4} />
      <Box display={"flex"} flexDir={"row"} ml={0.5}>
        <Text w={"200px"}>Data da ultima ediçao: {lastEdition}</Text>
        <Text w={"200px"}>Data de criação: {creation}</Text>
      </Box>
    </Box>
  );
}
