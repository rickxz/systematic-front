import { Table, Tbody, Tr, Td, TableContainer, Button, Icon } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import React from "react";

interface KeywordTableProps {
  keywords: string[];
  onDeleteKeyword: (index: number) => void;
}

const KeywordTable: React.FC<KeywordTableProps> = ({ keywords, onDeleteKeyword }) => {
  const handleDelete = (index: number) => {
    onDeleteKeyword(index);
  };

  return (
    <TableContainer border={"solid black 1px"} w="1050px" maxHeight={"120px"} overflowY={"auto"}>
      <Table variant="simple" size="md">
        <Tbody className="tableBody">
          {keywords.map((keyword, index) => (
            <Tr key={index}>
              <Td>{keyword}</Td>
              <Td textAlign={"right"}>
                <Button variant="ghost" onClick={() => handleDelete(index)}>
                  <Icon as={DeleteIcon} w={"15px"} h={"15px"} />
                </Button>
                <Button variant="ghost">
                  <Icon as={EditIcon} w={"15px"} h={"15px"} />
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default KeywordTable;
