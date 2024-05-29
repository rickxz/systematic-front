import { useDisclosure, Tr, Td, Checkbox } from "@chakra-ui/react";
import StudiesModal from "./StudiesModal";
import { ModalProvider } from "./ModalContext";
import { StudyInterface } from "../../../../public/interfaces/IStudy";
import { TableHeadersInterface } from "../../../../public/interfaces/ITableHeaders";
import ColoredIcon from "../../Icons/ColoredIcon";

interface IStudy {
  rowData: StudyInterface;
  rowIndex: number;
  isKeyWordTable: boolean;
  getColumnVisibility: (text: string) => boolean;
  headerData: TableHeadersInterface;
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
      console.log(headerData);
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
        
        {Object.keys(headerData)
        .filter(key => key in rowData )
        .map((key, keyIndex) => (
          <Td
            cursor={"pointer"}
            onClick={ () => {handleClick(rowData)}}
            key={keyIndex}
            display={isKeyWordTable ? "" : getColumnVisibility(Object.values(headerData)[1].toLowerCase()) ? "none" : ""}
            textAlign={"center"}
            bgColor={"#9CB0C0"}
          >
            {keyIndex === 0 && isKeyWordTable ? <ColoredIcon frequency={rowData[key as keyof StudyInterface] as number} /> : rowData[key as keyof StudyInterface]?.toString()}
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
