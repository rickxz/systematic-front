import GridLayout from "../../../../components/ui/Grid/Grid";
import Header from "../../../../components/ui/Header/Header";
import DynamicTable from "../../../../components/Tables/DynamicTable";
import useFetchTableData from "../../../../hooks/fetch/useFetchTableData";

export default function KeyWordScreen() {
  const { headerData, bodyData } = useFetchTableData("/data/keywordData.json");
  return (
    <GridLayout navigationType="Accordion">
      <Header text="Keyword Screen" />
      <DynamicTable headerData={headerData} bodyData={bodyData} type="keyword" filteredColumns={[]} />
    </GridLayout>
  );
}
