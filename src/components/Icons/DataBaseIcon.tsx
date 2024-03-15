import { dbicon } from "./Iconstyle";
import { Icon } from "@chakra-ui/react";
import { FaBoxArchive } from "react-icons/fa6";

export default function DataBaseIcon() {
  return <Icon as={FaBoxArchive} sx={dbicon} />;
}
