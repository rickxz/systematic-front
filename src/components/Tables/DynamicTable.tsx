import ColoredIcon from "../Icons/ColoredIcon";
import useTableSorting from "../../hooks/useTableSorting";
import { Table, TableContainer, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

interface DynamicTableProps {
  headerData: string[];
  bodyData: (string | number)[][];
  type?: string;
  filteredColumns: string[];
}

export default function DynamicTable({ headerData, bodyData, type, filteredColumns }: DynamicTableProps) {
  const isKeyWordTable = type === "keyword";
  const { handleSort, sortedData } = useTableSorting(headerData, bodyData);

  const shouldHideColumn = (columnName: string) => {
    if (filteredColumns.length === 0) {
      return false;
    }
    return !filteredColumns.includes(columnName);
  };

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
                display={shouldHideColumn(header.toLowerCase()) ? "none" : ""}
              >
                {header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {sortedData.map((rowData, rowIndex) => (
            <Tr key={rowIndex}>
              {rowData.map((cell, cellIndex) => (
                <Td
                  key={cellIndex}
                  display={isKeyWordTable ? "" : shouldHideColumn(headerData[cellIndex].toLowerCase()) ? "none" : ""}
                >
                  {cellIndex === 0 && isKeyWordTable ? <ColoredIcon frequency={rowData[2] as number} /> : cell}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
