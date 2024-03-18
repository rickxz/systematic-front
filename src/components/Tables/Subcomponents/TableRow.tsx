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
  Text
} from "@chakra-ui/react";
import StatusSelection from "./TableRowSubcomponents/StatusSelection";
import ColoredIcon from "../../Icons/ColoredIcon";
import StudyDataFiel from "../../Modals/StudyModal/StudyData";
import NavegationIconsPanel from "./TableRowSubcomponents/NavigationIconsPanel/NavigationIconPanel";
import StudiesModal from "./StudiesModal";

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
      {isOpen ? <StudiesModal rowData={rowData} isOpen={isOpen} onClose={onClose}/> : <></> }
    </>
  );
}
