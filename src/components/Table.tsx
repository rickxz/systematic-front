import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { TableContainer, Table, Tbody, Tr, Td, Button, Icon } from "@chakra-ui/react";

export default function InfosTable() {
  return (
    <TableContainer border={"solid black 1px"} maxWidth="50%">
      <Table variant="simple" size="sm">
        <Tbody className="tableBody">
          <Tr>
            <Td>Keyword 1</Td>
            <Td textAlign={"right"}>
              <Button variant="ghost">
                <Icon as={DeleteIcon} w={"15px"} h={"15px"} />
              </Button>
              <Button variant="ghost">
                <Icon as={EditIcon} w={"15px"} h={"15px"} />
              </Button>
            </Td>
          </Tr>
          <Tr>
            <Td>Keyword 2</Td>
            <Td textAlign={"right"}>
              <Button variant="ghost">
                <Icon as={DeleteIcon} w={"15px"} h={"15px"} />
              </Button>
              <Button variant="ghost">
                <Icon as={EditIcon} w={"15px"} h={"15px"} />
              </Button>
            </Td>
          </Tr>
          <Tr>
            <Td>Keyword 3</Td>
            <Td textAlign={"right"}>
              <Button variant="ghost">
                <Icon as={DeleteIcon} w={"15px"} h={"15px"} />
              </Button>
              <Button variant="ghost">
                <Icon as={EditIcon} w={"15px"} h={"15px"} />
              </Button>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </TableContainer>
  );
}
