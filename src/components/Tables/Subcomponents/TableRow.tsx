import { useDisclosure, Tr, Td, Checkbox } from "@chakra-ui/react";
import StudiesModal from "./StudiesModal";
import { ModalProvider } from "./ModalContext";
import { StudyInterface } from "../../../../public/interfaces/IStudy";

interface IStudy {
  rowData: StudyInterface;
  rowIndex: number;
  isKeyWordTable: boolean;
  getColumnVisibility: (text: string) => boolean;
  headerData: string[];
  title: string;
  status: "Accepted" | "Rejected" | "Unclassified" | "Duplicated";
  readingPriority: "Very high" | "High" | "Low" | "Very low";
  searchSession: "Scopus" | "Web of Science";
  score: number;
  isSelectionTable: boolean;
  isExtractionTable: boolean;
}

export default function TableRow({
  rowData,
  rowIndex,
  isKeyWordTable,
  isSelectionTable,
  isExtractionTable,
  getColumnVisibility,
  headerData,
}: IStudy) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleClick(rowData: StudyInterface) {
    if (isExtractionTable) {
      onOpen();
    }
    if (isSelectionTable) {
      console.log(rowData);
    }
  }



  return (
    <>
      <Tr key={rowIndex}>
        {!isKeyWordTable && (
          <Td bgColor={"#9CB0C0"}>
            <Checkbox borderColor={"#2A4F6C"}/>
          </Td>
        )}
        {Object.values(rowData).map((cell, cellIndex) => (
          <Td
            cursor={"pointer"}
            onClick={ () => {handleClick(rowData)}}
            key={cellIndex}
            display={isKeyWordTable ? "" : getColumnVisibility(headerData[1].toLowerCase()) ? "none" : ""}
            textAlign={"center"}
            bgColor={"#9CB0C0"}
          >
            {/*cellIndex === 0 && isKeyWordTable ? <ColoredIcon frequency={cell[1] as number} /> : cell*/}
            {cell.toString()}
          </Td>
        ))}
      </Tr>

      {isExtractionTable &&
        (isOpen ? (
          <ModalProvider>
            <StudiesModal rowData={Object.values(rowData)} isOpen={isOpen} onClose={onClose} />
          </ModalProvider>
        ) : (
          <></>
        ))}
    </>
  );
}
