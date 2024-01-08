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
    <FormControl display={"flex"} flexDir={"row"} columnGap={"10%"}>
      <InfosTable keywords={["keyword1", "keyword2", "keyWord3"]} />
      <KeywordInput event={addNewKeyword}></KeywordInput>
    </FormControl>
  );
}
