import { FormControl } from "@chakra-ui/react";
import KeywordInput from "./KeywordInput";
{
  /*import { DeleteIcon, EditIcon } from "@chakra-ui/icons";*/
}
import InfosTable from "../../Table";
export default function KeywordsTable() {
  function addNewKeyword() {
    console.log("Teste");
  }

  return (
    <FormControl display={"flex"} flexDir={"row"} columnGap={"20%"}>
      <KeywordInput event={addNewKeyword}></KeywordInput>
      <InfosTable keywords={["keyword1", "keyword2", "keyWord3"]} />
    </FormControl>
  );
}
