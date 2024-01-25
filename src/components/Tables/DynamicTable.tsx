import React from "react";
import { Table, TableContainer, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import ColoredIcon from "../Icons/ColoredIcon";

interface DynamicTableProps {
  headerData: string[];
  bodyData: (string | number)[][];
  icon?: React.ReactNode;
}

export default function DynamicTable({ headerData, bodyData, icon }: DynamicTableProps) {
  return (
    <TableContainer mt={10}>
      <Table variant={"striped"} size={"lg"}>
        <Thead>
          <Tr bgColor={"darkblue"}>
            {headerData.map((header, index) => (
              <Th key={index} color={"#FFFF"}>
                {header}
              </Th>
            ))}
          </Tr>
        </Thead>
        <Tbody>
          {bodyData.map((row, rowIndex) => (
            <Tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <Td key={cellIndex}>{cellIndex === 0 && icon ? <ColoredIcon frequency={row[2] as number} /> : cell}</Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
