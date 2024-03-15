import { Box } from "@chakra-ui/react";
import UploadBox from "./subcomponents/UploadBox";
import useInputState from "../../hooks/useInputState";
import GridLayout from "../../components/ui/Grid/Grid";
import Header from "../../components/ui/Header/Header";
import NavButton from "../../components/Buttons/NavButton";
import CheckboxInput from "../../components/Inputs/Checkbox";
import DynamicTable from "../../components/Tables/DynamicTable";
import useFetchTableData from "../../hooks/fetch/useFetchTableData";
import SearchInformations from "./subcomponents/searchInformations";
import { ckbox, conteiner, navbtnStyles } from "./styles/searchSessionStyles";

export default function SearchSession() {
  const { headerData, bodyData } = useFetchTableData("/data/tableData.json");
  const { value: checkedValues, handleChange: handleCheckboxChange } = useInputState<string[]>([]);
  return (
    <GridLayout navigationType="Accordion" defaultOpen={1}>
      <Header text={"Database Name-Studies Identification"} />
      <Box sx={conteiner}>
        <SearchInformations />
        <UploadBox />
      </Box>
      <Box sx={ckbox}>
        <CheckboxInput
          label="General Information: "
          name={headerData}
          handleCheckboxChange={(selectedItems) => handleCheckboxChange(selectedItems)}
          checkedByDefault={[
            "title",
            "author",
            "year",
            "status/selection",
            "status/extraction",
            "reading priority",
            "score",
          ]}
        />
      </Box>
      <DynamicTable headerData={headerData} bodyData={bodyData} filteredColumns={checkedValues} />
      <NavButton text={"Back"} path={"/newRevision/identification"} sx={navbtnStyles} />
    </GridLayout>
  );
}
