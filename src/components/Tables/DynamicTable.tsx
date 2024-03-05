import ColoredIcon from "../Icons/ColoredIcon";
import useTableSorting from "../../hooks/useTableSorting";
import useColumnVisibility from "../../hooks/useColumnVisibility";
import { Table, TableContainer, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import StudyModal from "../Modals/Study Selection and Extraction Modal/StudyModal";

interface DynamicTableProps {
  headerData: string[];
  bodyData: (string | number)[][];
  type?: string;
  filteredColumns: string[];
}

export default function DynamicTable({ headerData, bodyData, type, filteredColumns }: DynamicTableProps) {
  const isKeyWordTable = type === "keyword";
  const getColumnVisibility = useColumnVisibility(filteredColumns);
  const { handleSort, sortedData } = useTableSorting(headerData, bodyData);

  return (
    <TableContainer
      mt={10}
      h={isKeyWordTable ? "50vh" : 250}
      overflowY={"scroll"}
      w={{ base: "60%", md: "85%", lg: "100%" }}
    >
      <Table variant={"striped"}>
        <Thead>
          <Tr>
            {headerData.map((header) => (
              <Th
                key={header}
                onClick={() => handleSort(header)}
                _hover={{ cursor: "pointer" }}
                id={header.toLowerCase()}
                display={getColumnVisibility(header.toLowerCase()) ? "none" : ""}
                textAlign={"center"}
              >
                {header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {sortedData.map((rowData, rowIndex) => (
            <StudyModal rowData={rowData} rowIndex={rowIndex} isKeyWordTable={isKeyWordTable}
             getColumnVisibility={getColumnVisibility} headerData={headerData}
              title={""} status={"Accepted"} readingPriority={"Very high"} searchSession={"Scopus"} score={0} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
