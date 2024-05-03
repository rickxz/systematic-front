import TableRow from "./Subcomponents/TableRow";
import useTableSorting from "../../hooks/useTableSorting";
import useColumnVisibility from "../../hooks/useColumnVisibility";
import { tbConteiner } from "./styles/DynamicTableStyle";
import { Table, TableContainer, Thead, Tbody, Tr, Th } from "@chakra-ui/react";

interface DynamicTableProps {
  headerData: string[];
  bodyData: (string | number)[][];
  type?: string;
  filteredColumns: string[];
}

export default function DynamicTable({ headerData, bodyData, type, filteredColumns }: DynamicTableProps) {
  const isKeyWordTable = type === "keyword";
  const isModalTable = type === "modal";
  const getColumnVisibility = useColumnVisibility(filteredColumns);
  const { handleSort, sortedData } = useTableSorting(headerData, bodyData);

  return (
    <TableContainer sx={tbConteiner} h={isKeyWordTable ? 300 : 250} borderBottom={"1em solid #303D50"}>
      <Table variant={"striped"}>
        <Thead bgColor={"#303D50"}>
          <Tr>
            <Th></Th>
            {headerData.map((header) => (
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
              isModalTabel={isModalTable}
            />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
