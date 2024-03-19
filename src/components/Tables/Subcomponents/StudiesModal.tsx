  import {Modal,ModalOverlay, ModalContent, ModalHeader,
    ModalFooter,ModalBody, ModalCloseButton, Button, Flex,  Text,}
  from "@chakra-ui/react";
  import StatusSelection from "./TableRowSubcomponents/StatusSelection";
  import StudyDataFiel from "../../Modals/StudyModal/StudyData";
  import NavegationIconsPanel from "./TableRowSubcomponents/NavigationIconsPanel/NavigationIconPanel";
  import { ModalProvider } from './ModalContext';

  interface IStudy {
    rowData: (string | number)[],
    isOpen: boolean,
    onClose: () => void;
  }
  export default function StudiesModal({ rowData, isOpen, onClose}: IStudy) {

    return (  
      <>
        <ModalProvider>
          <Modal isOpen={isOpen} onClose={onClose} size={"8xl"}>
            <ModalOverlay />
    
            <ModalContent w="90%">
              <ModalHeader color="white" bg="gray.800">
                <Flex direction={"column"} alignItems={"center"}>
                  <Text>{rowData[0]}</Text>
                  <NavegationIconsPanel/>
                </Flex>
              </ModalHeader>
              <ModalCloseButton bg="white"/>
    
              <ModalBody>

                <StudyDataFiel studyData={rowData} />
                
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
                    <Button>Previous</Button>
                    <Button>Next</Button>
                  </Flex>
                </Flex>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </ModalProvider>
      </>
    );
  }
  