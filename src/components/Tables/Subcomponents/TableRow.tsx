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
  useDisclosure,
  Tr,
  Td,
  Checkbox,
  Text,
  Icon
} from "@chakra-ui/react";
import StatusSelection from "./TableRowSubcomponents/StatusSelection";
import ColoredIcon from "../../Icons/ColoredIcon";
import StudyDataFiel from "../../Modals/StudyModal/StudyData";
//buttons
import StudyDataButton from "./TableRowSubcomponents/ModalHeaderButtons/StudyDataButton";
import SelectionDataButton from "./TableRowSubcomponents/ModalHeaderButtons/SelectionStudiesButton";
import DataExtractionFormButton from "./TableRowSubcomponents/ModalHeaderButtons/DataExtractionFormButton";
import SimilarStudiesButton from "./TableRowSubcomponents/ModalHeaderButtons/SimilarStudiesButton";
import QualityFormButton from "./TableRowSubcomponents/ModalHeaderButtons/QualityFormButton";
import ReferencesButton from "./TableRowSubcomponents/ModalHeaderButtons/ReferencesButton";

interface IStudy {
  rowData: (string | number)[];
  rowIndex: number;
  isKeyWordTable: boolean;
  getColumnVisibility: (text: string) => boolean;
  headerData: string[];
  title: string;
  status: "Accepted" | "Rejected" | "Unclassified" | "Duplicated";
  readingPriority: "Very high" | "High" | "Low" | "Very low";
  searchSession: "Scopus" | "Web of Science";
  score: number;
}

export default function TableRow({
  rowData,
  rowIndex,
  isKeyWordTable,
  getColumnVisibility,
  headerData,
  title,
}: IStudy) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Tr key={rowIndex}>
        {!isKeyWordTable && (
          <Td>
            <Checkbox />
          </Td>
        )}
        {rowData.map((cell, cellIndex) => (
          <Td
            cursor={"pointer"}
            onClick={onOpen}
            key={cellIndex}
            display={isKeyWordTable ? "" : getColumnVisibility(headerData[cellIndex].toLowerCase()) ? "none" : ""}
            textAlign={"center"}
          >
            {cellIndex === 0 && isKeyWordTable ? <ColoredIcon frequency={rowData[2] as number} /> : cell}
          </Td>
        ))}
      </Tr>

      <Modal isOpen={isOpen} onClose={onClose} size={"6xl"}>
        <ModalOverlay />

        <ModalContent>
          <ModalHeader color="white" bg="gray.800">
            <Flex direction={"column"} alignItems={"center"}>
              <Text>{rowData[0]}</Text>
              <Flex w="100%" h='10' gap="5">
                <Flex bg="white" w="30%" h='100%'>
                  <StudyDataButton/>
                </Flex>
                <Flex bg="white" w="70%" h='100%' gap="3">
                  <SelectionDataButton/>
                  <DataExtractionFormButton/>
                  <SimilarStudiesButton/>
                  <QualityFormButton/>
                  <ReferencesButton/>
                </Flex>
              </Flex>
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
    </>
  );
}
