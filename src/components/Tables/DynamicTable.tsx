/* eslint-disable react-hooks/rules-of-hooks */
import { FaRegCircle } from "react-icons/fa";
import { useIconColorByFrequency } from "../../hooks/UseIconColorByFrequency";
import { Table, TableContainer, Thead, Tbody, Tr, Th, Td, Icon } from "@chakra-ui/react";

interface DynamicTableProps {
  headerData: string[];
  bodyData: (string | number)[][];
  type: string;
}

export default function DynamicTable({ headerData, bodyData, type }: DynamicTableProps) {
  const isKeyWordTable = type === "keyword";
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
                  {cellIndex === 0 && isKeyWordTable ? (
                    <Icon
                      as={FaRegCircle}
                      color={useIconColorByFrequency(row[2] as number)}
                      bgColor={useIconColorByFrequency(row[2] as number)}
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
