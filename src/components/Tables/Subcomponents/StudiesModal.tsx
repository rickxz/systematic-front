import { useContext } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Flex,
  Text,
} from "@chakra-ui/react";
import StatusSelection from "./TableRowSubcomponents/StatusSelection";
import StudyDataFiel from "../../Modals/StudyModal/StudyData";
import NavegationIconsPanel from "./TableRowSubcomponents/NavigationIconsPanel/NavigationIconPanel";
import OtherStudyPanels from "./OtherStudyPanels";
import ModalContext from "./ModalContext";
import { StudyInterface } from "../../../../public/interfaces/IStudy";
import AppContext from "../../Context/AppContext";

interface IStudy {
  rowData: StudyInterface;
  isOpen: boolean;
  onClose: () => void;
}

export default function StudiesModal({ rowData, isOpen, onClose }: IStudy) {
  const modalContext = useContext(ModalContext);
  const appContext = useContext(AppContext);
  const study = (appContext?.extractionStudy as StudyInterface);
  const sortedStudies = (appContext?.sortedStudies as StudyInterface[])
  const index = (appContext?.sortedExtractionStudyIndex as number);



  function ChangeToNext() {
    const newIndex = (index as number) + 1;
    appContext?.setSortedExtractionStudyIndex(newIndex)
    appContext?.setExtractionStudy((sortedStudies as StudyInterface[])[newIndex])
  }

  function ChangeToPrevius() {
    const newIndex = (index as number) - 1;
    appContext?.setSortedExtractionStudyIndex(newIndex)
    appContext?.setExtractionStudy((sortedStudies as StudyInterface[])[newIndex])
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} size={"8xl"}>
        <ModalOverlay />
        <ModalContent w="90%">
          <ModalHeader color="white" bg="gray.800">
            <Flex direction={"column"} alignItems={"center"}>
              <Text>{study.title}</Text>
              <NavegationIconsPanel />
            </Flex>
          </ModalHeader>
          <ModalCloseButton bg="white" />
          <ModalBody>
            <Flex gap="25px">
              {modalContext?.StudyDataButtonState ? (
                <StudyDataFiel studyData={study} type={"Extraction"} />
              ) : (
                <></>
              )}
              <OtherStudyPanels />
            </Flex>
          </ModalBody>
          <ModalFooter color="white" bg="gray.800">
            <Flex justify={"space-around"} flex={"1"}>
              <StatusSelection />
              <Button>Get full text</Button>
              <Flex gap="10px">
                <Button>Discard Changes</Button>
                <Button>Save</Button>
                <Button>Chose</Button>
              </Flex>
              <Flex gap="10px">
                <Button onClick={ChangeToPrevius}>Previous</Button>
                <Button onClick={ChangeToNext}>Next</Button>
              </Flex>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
