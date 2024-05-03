import Header from "../../../../components/ui/Header/Header";
import DynamicTable from "../../../../components/Tables/DynamicTable";
import useFetchTableData from "../../../../hooks/fetch/useFetchTableData";
import { Flex } from "@chakra-ui/react";
import FlexLayout from "../../../../components/ui/Flex/Flex";

export default function KeyWordScreen() {
  const { headerData, bodyData } = useFetchTableData("/data/keywordData.json");
  return (
    <FlexLayout defaultOpen={1} navigationType="Accordion">
      <Header text="Keyword Screen" />

      <Flex marginLeft={"4em"} marginRight={"4em"} w={"78vw"}>
        <DynamicTable headerData={headerData} bodyData={bodyData} type="keyword" filteredColumns={[]} />
      </Flex>
    </FlexLayout>
  );
}
