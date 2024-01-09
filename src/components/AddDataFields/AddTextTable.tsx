import { useState } from "react";
import { FormControl, FormLabel } from "@chakra-ui/react";
import AddTextField from "./AddTextField";
import InfosTable from "../Tables/ProtocolAddTable";

interface AddTextTableProps {
  text: string;
  placeholder: string;
}
export default function AddTextTable({ text, placeholder }: AddTextTableProps) {
  const [AddText, setAddText] = useState<string[]>([]);

  const handleAddText = (newKeyword: string) => {
    setAddText((prevAddText) => [...prevAddText, newKeyword]);
  };
  const handleDeleteText = (index: number) => {
    const updatedAddText = [...AddText];
    updatedAddText.splice(index, 1);
    setAddText(updatedAddText);
  };
  return (
    <FormControl display={"flex"} flexDir={"column"}>
      <FormLabel>{text}</FormLabel>

      <FormControl display={"flex"} flexDir={"row"} columnGap={"5%"}>
        <AddTextField onAddText={handleAddText} text={placeholder} />
        <InfosTable onDeleteAddedText={handleDeleteText} AddTexts={AddText} />
      </FormControl>
    </FormControl>
  );
}
