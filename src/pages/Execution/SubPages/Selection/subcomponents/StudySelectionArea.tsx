import { Box, Flex } from "@chakra-ui/react";
import ButtonsForSelection from "./ButtonsForSelection";
import StudyDataFiel from "../../../../../components/Modals/StudyModal/StudyData";

export default function StudySelectionArea() {
  return (
    <>
      <Flex mt="10" direction="column" bg="gray.600" w="auto" p="5" alignItems={"center"}>
        <ButtonsForSelection />
        <Box w={"100%"} bg="gray.200">
          <StudyDataFiel studyData={[]} type="Selection"/>
        </Box>
      </Flex>
    </>
  );
}
