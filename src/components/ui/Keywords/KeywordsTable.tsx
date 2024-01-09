import { useState } from "react";
import { FormControl } from "@chakra-ui/react";
import KeywordInput from "./AddTextField";
import InfosTable from "../../Table";

export default function AddTextTable() {
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
    <FormControl display={"flex"} flexDir={"row"} columnGap={"20%"}>
      <KeywordInput onAddText={handleAddText} />
      <InfosTable onDeleteAddedText={handleDeleteText} AddTexts={AddText} />
    </FormControl>
  );
}
