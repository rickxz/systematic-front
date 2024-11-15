import { Box, Flex, Text } from "@chakra-ui/react";
import ButtonsForSelection from "./ButtonsForSelection";
import StudyDataFiel from "../../../../../components/Modals/StudyModal/StudyData";
import { StudyInterface } from "../../../../../../public/interfaces/IStudy";
import { useContext } from "react";
import AppContext from "../../../../../components/Context/AppContext";

export default function StudySelectionArea() {
  const context = useContext(AppContext);
  const studyData = context?.selectionStudy;
  const showSelectionModal = context?.showSelectionModal;

  if (!showSelectionModal) return (
    <Flex mt="10" direction="column" bg="gray.600" w="100%" p="5" alignItems="center">
      <Text color="white">Click on a study on the table</Text>
    </Flex>
  );
  
  return (
    <>
      <Flex mt="10" direction="column" bg="gray.600" w="100%" p="5" alignItems={"center"}>
        <ButtonsForSelection />
        <Box w={"100%"} bg="gray.200">
          <StudyDataFiel studyData={(studyData as StudyInterface)} type="Selection" />
        </Box>
      </Flex>
    </>
  );
}
