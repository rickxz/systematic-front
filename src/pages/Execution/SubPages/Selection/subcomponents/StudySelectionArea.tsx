import { Box, Flex } from "@chakra-ui/react";
import ButtonsForSelection from "./ButtonsForSelection";
import { box, conteiner } from "../../../styles/StudySelectionAreaStyles";

export default function StudySelectionArea() {
  return (
    <>
      <Flex sx={conteiner}>
        <ButtonsForSelection />
        <Box sx={box}></Box>
      </Flex>
    </>
  );
}
