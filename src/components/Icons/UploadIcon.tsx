import { Icon } from "@chakra-ui/react";
import { FaFile } from "react-icons/fa";

export default function UploadIcon() {
  return <Icon as={FaFile} w={"60px"} h={"60px"} justifySelf={"center"} alignSelf={"center"} ml={"0.5rem"} mb={5} />;
}
