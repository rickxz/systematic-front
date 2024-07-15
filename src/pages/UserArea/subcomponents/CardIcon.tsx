import { Icon } from "@chakra-ui/react";
import { cardIcon } from "../styles/IconStyles";
import { IoDocumentText } from "react-icons/io5";
//import { MdSearch } from "react-icons/md";

export default function CardIcon() {
  return (
    <Icon 
      color="#263C56" 
      as={IoDocumentText} 
      sx={cardIcon} 
      mr="10px" 
       
    />
  );
}
