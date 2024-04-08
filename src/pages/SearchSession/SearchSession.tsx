import { Box } from "@chakra-ui/react";
import { Upload } from "../../components/upload/Upload";
import useInputState from "../../hooks/useInputState";
import GridLayout from "../../components/ui/Grid/Grid";
import Header from "../../components/ui/Header/Header";
import NavButton from "../../components/Buttons/NavButton";
import DynamicTable from "../../components/Tables/DynamicTable";
import useFetchTableData from "../../hooks/fetch/useFetchTableData";
import SearchInformations from "./subcomponents/searchInformations";
import { ckbox, conteiner, navbtnStyles } from "./styles/searchSessionStyles";
import ComboBox from "../../components/Inputs/ComboBox";
import { flex } from "../NovaRevisao/styles/finalizationStyles";
import EventButton from "../../components/Buttons/EventButton";

export default function SearchSession() {
  const { headerData, bodyData } = useFetchTableData("/data/tableData.json");
  const { value: checkedValues, handleChange: handleCheckboxChange } = useInputState<string[]>([]);
  return (
    <GridLayout navigationType="Accordion" defaultOpen={1}>
      <Header text={"Database Name-Studies Identification"} />
      <Box sx={conteiner}>
        <SearchInformations />
        <Box display={flex} flexDir={"column"}>
          <Upload />
          <Box mt={5} display={flex} flexDir={"row"} justifyContent={"space-evenly"}>
            <ComboBox
              options={headerData}
              handleCheckboxChange={handleCheckboxChange}
              selectedItems={[
                "title",
                "author",
                "year",
                "status/selection",
                "status/extraction",
                "reading priority",
                "score",
              ]}
              text={"filter options"}
            />
            <EventButton
              ml={4}
              event={function (): void {
                window.alert("Duplicated Pappers removed");
              }}
              text={"Remove Duplicated Pappers"}
            />
          </Box>
        </Box>
      </Box>
      <Box sx={ckbox}></Box>
      <DynamicTable headerData={headerData} bodyData={bodyData} filteredColumns={checkedValues} />
      <NavButton text={"Back"} path={"/newRevision/identification"} sx={navbtnStyles} />
    </GridLayout>
  );
}
