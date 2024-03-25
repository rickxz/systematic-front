import { Icon } from "@chakra-ui/react";
import { cardIcon } from "../styles/IconStyles";
import { IoNewspaperSharp } from "react-icons/io5";

export default function CardIcon() {
  return <Icon as={IoNewspaperSharp} sx={cardIcon} />;
}
