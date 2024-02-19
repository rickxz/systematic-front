import UploadBox from "./UploadBox";
import { Box } from "@chakra-ui/react";
import SearchInformations from "./searchInformations";
import useInputState from "../../hooks/useInputState";
import GridLayout from "../../components/ui/Grid/Grid";
import Header from "../../components/ui/Header/Header";
import NavButton from "../../components/Buttons/NavButton";
import CheckboxInput from "../../components/Inputs/Checkbox";
import DynamicTable from "../../components/Tables/DynamicTable";
import useFetchTableData from "../../hooks/fetch/useFetchTableData";

export default function SearchSession() {
  const { headerData, bodyData } = useFetchTableData("/data/tableData.json");
  const { value: checkedValues, handleChange: handleCheckboxChange } = useInputState<string[]>([]);
  return (
    <GridLayout navigationType="Accordion">
      <Header text={"Database Name-Studies Identification"} />
      <Box mt={10} display={"flex"} flexDir={"row"} columnGap={20}>
        <SearchInformations />
        <UploadBox />
      </Box>
      <Box display={"flex"} flexDir={"row"} columnGap={20} mt={10}>
        <CheckboxInput
          label="General Information: "
          name={headerData}
          handleCheckboxChange={(selectedItems) => handleCheckboxChange(selectedItems)}
          checkedByDefault={[
            "idss",
            "id paper",
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
      <NavButton
        text={"Back"}
        path={"/newRevision/identification"}
        mt={"5"}
        w={150}
        display={"flex"}
        justifySelf={"flex-start"}
      />
    </GridLayout>
  );
}
