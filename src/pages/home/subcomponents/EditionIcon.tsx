import { Icon } from "@chakra-ui/icons";
import { FaRegCircle } from "react-icons/fa6";
import { editionicon } from "../styles/IconStyles";

interface IEditedProps {
  isEdited: boolean;
}

export default function EditionIcon({ isEdited }: IEditedProps) {
  return (
    <Icon
      as={FaRegCircle}
      sx={editionicon}
      color={!isEdited ? "green" : "yellow"}
      bgColor={!isEdited ? "green" : "yellow"}
    />
  );
}
