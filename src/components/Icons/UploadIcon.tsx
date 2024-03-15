import { Icon } from "@chakra-ui/react";
import { FaFile } from "react-icons/fa";
import { uploadIcon } from "./Iconstyle";

export default function UploadIcon() {
  return <Icon as={FaFile} sx={uploadIcon} />;
}
