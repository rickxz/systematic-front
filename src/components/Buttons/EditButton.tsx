import { EditIcon } from "@chakra-ui/icons";
import { Button, Icon } from "@chakra-ui/react";

interface editButtonProps {
  editIndex: number | null;
  index: number;
  handleSaveEdit: (AddTexts: string[]) => void;
  handleEdit: (index: number) => void;
  AddTexts: string[];
}

export default function EditButton({ editIndex, index, handleSaveEdit, handleEdit, AddTexts }: editButtonProps) {
  return (
    <>
      {editIndex === index ? (
        <Button variant="ghost" onClick={() => handleSaveEdit(AddTexts)}>
          Save
        </Button>
      ) : (
        <Button variant="ghost" onClick={() => handleEdit(index)}>
          <Icon as={EditIcon} w={"15px"} h={"15px"} />
        </Button>
      )}{" "}
    </>
  );
}
