import { Icon } from "@chakra-ui/icons";
import { FaRegCircle } from "react-icons/fa6";

interface IEditedProps {
  isEdited: boolean;
}

export default function EditionIcon({ isEdited }: IEditedProps) {
  return (
    <Icon
      as={FaRegCircle}
      size={"bg"}
      color={!isEdited ? "green" : "yellow"}
      bgColor={!isEdited ? "green" : "yellow"}
      mt={1.499}
      borderRadius={"36px"}
      mr={0.8}
    />
  );
}
