import { Table, Tbody, Tr, Td, TableContainer, Button, Icon } from "@chakra-ui/react";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";

interface InfosTableProps {
  AddTexts: string[];
  onDeleteAddedText: (index: number) => void;
}

export default function InfosTable({ AddTexts, onDeleteAddedText }: InfosTableProps) {
  const handleDelete = (index: number) => {
    onDeleteAddedText(index);
  };

  return (
    <TableContainer border={"solid black 1px"} w="1050px" maxHeight={"120px"} overflowY={"auto"}>
      <Table variant="simple" size="md">
        <Tbody className="tableBody">
          {AddTexts.map((addText, index) => (
            <Tr key={index}>
              <Td>{addText}</Td>
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
}
