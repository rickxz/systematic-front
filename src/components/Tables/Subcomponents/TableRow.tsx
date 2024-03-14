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
  Box,
  Tr,
  Td,
  Checkbox,
  Text,
  Icon
} from "@chakra-ui/react";
import StatusSelection from "./TableRowSubcomponents/StatusSelection";
import ColoredIcon from "../../Icons/ColoredIcon";
import StudyDataFiel from "../../Modals/StudyModal/StudyData";
//icones
import {DataExtractionFormIcon} from "../../../../public/icons/StudyModal/DataExtractionFormIcon"
import {QualityFormIcon} from "../../../../public/icons/StudyModal/QualityFormIcon";
import {ReferencesIcon} from "../../../../public/icons/StudyModal/ReferencesIcon";
import {SelectionDataIcon} from "../../../../public/icons//StudyModal/SelectionDataIcon";
import {SimilarStudiesIcon} from "../../../../public/icons/StudyModal/SimilarStudiesIcon";
import {StudyDataIcon} from "../../../../public/icons/StudyModal/StudyDataIcon";

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
                  <StudyDataIcon/>
                </Flex>
                <Flex bg="white" w="70%" h='100%'></Flex>p
              </Flex>
            </Flex>
          </ModalHeader>
          <ModalCloseButton bg="white"/>

          <ModalBody>
            <StudyDataFiel studyData={rowData}/>
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
