import { Icon } from "@chakra-ui/react";
import { cardIcon } from "../styles/IconStyles";
import { IoNewspaperSharp } from "react-icons/io5";

export default function CardIcon() {
  return <Icon color={"#301E1A"} as={IoNewspaperSharp} sx={cardIcon} />;
}
