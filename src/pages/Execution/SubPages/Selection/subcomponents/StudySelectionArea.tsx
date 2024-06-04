import { Box, Flex } from "@chakra-ui/react";
import ButtonsForSelection from "./ButtonsForSelection";
import StudyDataFiel from "../../../../../components/Modals/StudyModal/StudyData";
import useFetchStudyData from "../../../../../hooks/seachAppropriateStudy/useFetchStudyData";
import { StudyInterface } from "../../../../../../public/interfaces/IStudy";
import { useContext } from "react";
import AppContext from "../../../../../components/Context/AppContext";

export default function StudySelectionArea() {
  const studyData = useFetchStudyData("../../../../public/data/studyData.json");
  const studyDataAvailable = studyData && studyData.length > 0;
  const context = useContext(AppContext);

  return (
    <>
      <Flex mt="10" direction="column" bg="gray.600" w="auto" p="5" alignItems={"center"}>
        <ButtonsForSelection />
        <Box w={"100%"} bg="gray.200">
          {studyDataAvailable && <StudyDataFiel studyData={(context?.selectionStudy as StudyInterface)} type="Selection" />}
        </Box>
      </Flex>
    </>
  );
}
