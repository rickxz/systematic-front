import { Box, Icon, Text } from "@chakra-ui/react";
import { FaRegCircle } from "react-icons/fa6";

interface IEditionInfosProps {
  lastEdition: string;
  creation: string;
  isEdited: boolean;
}

export default function EditionInfos({ lastEdition, creation, isEdited }: IEditionInfosProps) {
  return (
    <Box display={"flex"} flexDir={"row"} mt={"1.5rem"} mr={0}>
      <Icon
        as={FaRegCircle}
        size={"bg"}
        color={!isEdited ? "green" : "yellow"}
        bgColor={!isEdited ? "green" : "yellow"}
        mt={1.499}
        borderRadius={"36px"}
        mr={0.8}
      />
      <Box display={"flex"} flexDir={"row"}>
        <Text w={"200px"}>Data da ultima ediçao: {lastEdition}</Text>
        <Text w={"200px"}>Data de criação: {creation}</Text>
      </Box>
    </Box>
  );
}
