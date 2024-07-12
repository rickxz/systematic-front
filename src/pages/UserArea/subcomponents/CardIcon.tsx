import { Icon } from "@chakra-ui/react";
import { cardIcon } from "../styles/IconStyles";
import { IoNewspaperSharp } from "react-icons/io5";

export default function CardIcon() {
  return <Icon color={"#263C56"} as={IoNewspaperSharp} sx={cardIcon} mr={"10px"}  />;
}
