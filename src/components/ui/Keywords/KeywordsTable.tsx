import { useState } from "react";
import { FormControl } from "@chakra-ui/react";
import KeywordInput from "./KeywordInput";
import InfosTable from "../../Table";

export default function KeywordsTable() {
  const [keywords, setKeywords] = useState<string[]>([]);

  const handleAddKeyword = (newKeyword: string) => {
    setKeywords((prevKeywords) => [...prevKeywords, newKeyword]);
  };
  const handleDeleteKeyword = (index: number) => {
    const updatedKeywords = [...keywords];
    updatedKeywords.splice(index, 1);
    setKeywords(updatedKeywords);
  };
  return (
    <FormControl display={"flex"} flexDir={"row"} columnGap={"20%"}>
      <KeywordInput onAddKeyword={handleAddKeyword} />
      <InfosTable onDeleteKeyword={handleDeleteKeyword} keywords={keywords} />
    </FormControl>
  );
}
