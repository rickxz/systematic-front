import { Table, Tbody, Tr, Td, TableContainer, Button, Icon } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

interface KeywordTableProps {
  keywords: string[];
}

const KeywordTable: React.FC<KeywordTableProps> = ({ keywords }) => {
  return (
    <TableContainer border={"solid black 1px"} maxWidth="50%">
      <Table variant="simple" size="sm">
        <Tbody className="tableBody">
          {keywords.map((keyword, index) => (
            <Tr key={index}>
              <Td>{keyword}</Td>
              <Td textAlign={"right"}>
                <Button variant="ghost">
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
