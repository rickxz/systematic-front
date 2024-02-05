import GridLayout from "../../components/ui/Grid/Grid";
import Header from "../../components/ui/Header/Header";
import DynamicTable from "../../components/Tables/DynamicTable";

export default function KeyWordScreen() {
  const headerData = ["", "keyword", "Frequency"];
  const bodyData = [
    ["", "Lorem", 5],
    ["", "Lorem", 3],
    ["", "Lorem", 2],
    ["", "Lorem", 2],
    ["", "Lorem", 2],
    ["", "Lorem", 2],
    ["", "Lorem", 2],
    ["", "Lorem", 2],
    ["", "Lorem", 2],
  ];
  return (
    <GridLayout navigationType="Accordion">
      <Header text="Keyword Screen" />
      <DynamicTable headerData={headerData} bodyData={bodyData} type="keyword" filteredColumns={[]} />
    </GridLayout>
  );
}
