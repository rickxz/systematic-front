import { useDisclosure, Tr, Td, Checkbox } from "@chakra-ui/react";

import ColoredIcon from "../../Icons/ColoredIcon";
import StudiesModal from "./StudiesModal";
import { ModalProvider } from "./ModalContext";

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

  function handleClick(rowData: (string|number)[]) {
    if (isExtractionTable) {
      onOpen();
    }
    if (!isSelectionTable) {
      console.log(rowData);
    }
  }



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
            onClick={ () => {handleClick(rowData)}}
            key={cellIndex}
            display={isKeyWordTable ? "" : getColumnVisibility(headerData[cellIndex].toLowerCase()) ? "none" : ""}
            textAlign={"center"}
          >
            {cellIndex === 0 && isKeyWordTable ? <ColoredIcon frequency={rowData[2] as number} /> : cell}
          </Td>
        ))}
      </Tr>

      {isSelectionTable &&
        (isOpen ? (
          <ModalProvider>
            <StudiesModal rowData={rowData} isOpen={isOpen} onClose={onClose} />
          </ModalProvider>
        ) : (
          <></>
        ))}
    </>
  );
}
