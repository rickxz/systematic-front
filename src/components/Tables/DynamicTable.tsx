import { Table, TableContainer, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import ColoredIcon from "../Icons/ColoredIcon";

interface DynamicTableProps {
  headerData: string[];
  bodyData: (string | number)[][];
  type?: string;
}

export default function DynamicTable({ headerData, bodyData, type }: DynamicTableProps) {
  const isKeyWordTable = type === "keyword";

  return (
    <TableContainer mt={10} h={isKeyWordTable ? "50vh" : 250} overflowY={"scroll"}>
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
                  {cellIndex === 0 && isKeyWordTable ? <ColoredIcon frequency={row[2] as number} /> : cell}
                </Td>
              ))}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
