import React from "react";
import { Table, TableContainer, Thead, Tbody, Tr, Th, Td, Icon } from "@chakra-ui/react";
import { FaRegCircle } from "react-icons/fa";

interface DynamicTableProps {
  headerData: string[];
  bodyData: (string | number)[][];
  icon?: React.ReactNode;
}

export default function DynamicTable({ headerData, bodyData, icon }: DynamicTableProps) {
  const handleIconColorByFrequency = (frequency: number): string => {
    if (frequency <= 2) {
      return "red";
    } else if (frequency === 3) {
      return "yellow";
    } else {
      return "blue";
    }
  };

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
                <Td key={cellIndex}>
                  {cellIndex === 0 && icon ? (
                    <Icon
                      as={FaRegCircle}
                      color={handleIconColorByFrequency(row[2] as number)}
                      bgColor={handleIconColorByFrequency(row[2] as number)}
                      borderRadius={360}
                    />
                  ) : (
                    cell
                  )}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
