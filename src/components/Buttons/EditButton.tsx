import { EditIcon } from "@chakra-ui/icons";
import { Button, Icon } from "@chakra-ui/react";

interface editButtonProps {
  editIndex: number | null;
  index: number;
  handleSaveEdit: () => void;
  handleEdit: (index: number) => void;
}

export default function EditButton({ editIndex, index, handleSaveEdit, handleEdit }: editButtonProps) {
  return (
    <>
      {editIndex === index ? (
        <Button variant="ghost" onClick={handleSaveEdit}>
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
