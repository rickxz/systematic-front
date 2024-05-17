import TableRow from "./Subcomponents/TableRow";
import useTableSorting from "../../hooks/useTableSorting";
import useColumnVisibility from "../../hooks/useColumnVisibility";
import { tbConteiner } from "./styles/DynamicTableStyle";
import { Table, TableContainer, Thead, Tbody, Tr, Th } from "@chakra-ui/react";
import { StudyInterface } from "../../../public/interfaces/IStudy";
import { TableHeadersInterface } from "../../../public/interfaces/ITableHeaders";

interface DynamicTableProps {
  headerData: TableHeadersInterface;
  bodyData: StudyInterface[];
  tableType: string;
  filteredColumns: string[];
}

enum tableTypeEnum {
  SELECTION = "selection",
  EXTRACTION = "extraction",
  KEYWORD = "keyword"
}


export default function DynamicTable({ headerData, bodyData, tableType, filteredColumns }: DynamicTableProps) {
  const isKeyWordTable = tableType == tableTypeEnum.KEYWORD;
  const isSelectionTable = tableType == tableTypeEnum.SELECTION;
  const isExtractionTable = tableType === tableTypeEnum.EXTRACTION;
  
  const getColumnVisibility = useColumnVisibility(filteredColumns);
  const { handleSort, sortedData } = useTableSorting(bodyData, headerData);
  console.log(sortedData);


  return (
    <TableContainer sx={tbConteiner} h={isKeyWordTable ? 300 : 250} borderBottom={"1em solid #303D50"}>
      <Table variant={"striped"}>
        <Thead bgColor={"#303D50"}>
          <Tr>
            <Th></Th>
            {Object.values(headerData).map((header) => (
              <Th
                key={header}
                onClick={() => handleSort(header)}
                _hover={{ cursor: "pointer" }}
                id={header.toLowerCase()}
                display={getColumnVisibility(header.toLowerCase()) ? "none" : ""}
                textAlign={"center"}
                color={"#FDF0D5"}
              >
                {header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {sortedData.map((rowData, rowIndex) => (
            <TableRow
              rowData={rowData}
              rowIndex={rowIndex}
              isKeyWordTable={isKeyWordTable}
              getColumnVisibility={getColumnVisibility}
              headerData={headerData}
              title={""}
              status={"Accepted"}
              readingPriority={"Very high"}
              searchSession={"Scopus"}
              score={0}
              isSelectionTable = {isSelectionTable}
              isExtractionTable = {isExtractionTable}

            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
