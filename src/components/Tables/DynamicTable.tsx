import React, { useState } from "react";
import ColoredIcon from "../Icons/ColoredIcon";
import { Table, TableContainer, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

interface DynamicTableProps {
  headerData: string[];
  bodyData: (string | number)[][];
  type?: string;
}

const DynamicTable: React.FC<DynamicTableProps> = ({ headerData, bodyData, type }) => {
  const isKeyWordTable = type === "keyword";

  const [sortBy, setSortBy] = useState<string | null>(null);
  const [sortDesc, setSortDesc] = useState(false);

  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSortDesc(!sortDesc);
    } else {
      setSortBy(column);
      setSortDesc(false);
    }
  };
  const sortedData = React.useMemo(() => {
    if (sortBy) {
      return [...bodyData].sort((a, b) => {
        const valueA = a[headerData.indexOf(sortBy)];
        const valueB = b[headerData.indexOf(sortBy)];
        const comparison =
          typeof valueA === "number" && typeof valueB === "number"
            ? valueA - valueB
            : String(valueA).localeCompare(String(valueB));

        return sortDesc ? comparison * -1 : comparison;
      });
    } else {
      return bodyData;
    }
  }, [bodyData, headerData, sortBy, sortDesc]);

  return (
    <TableContainer mt={10} h={isKeyWordTable ? "50vh" : 250} overflowY={"scroll"}>
      <Table variant={"striped"} size={"lg"}>
        <Thead>
          <Tr>
            {headerData.map((header) => (
              <Th key={header} onClick={() => handleSort(header)} _hover={{ cursor: "pointer" }}>
                {header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {sortedData.map((rowData, rowIndex) => (
            <Tr key={rowIndex}>
              {rowData.map((cell, cellIndex) => (
                <Td key={cellIndex}>
                  {cellIndex == 0 && isKeyWordTable ? <ColoredIcon frequency={rowData[2] as number} /> : cell}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default DynamicTable;
