import { Box } from "@chakra-ui/react";
import useInputState from "../../../../hooks/useInputState";
import Header from "../../../../components/ui/Header/Header";
import ComboBox from "../../../../components/Inputs/ComboBox";
import InputText from "../../../../components/Inputs/InputText";
import SelectInput from "../../../../components/Inputs/SelectInput";
import StudySelectionArea from "./subcomponents/StudySelectionArea";
import DynamicTable from "../../../../components/Tables/DynamicTable";
import useFetchTableData from "../../../../hooks/fetch/useFetchTableData";
import { conteiner, inputconteiner } from "../../styles/executionStyles";
import GridLayout from "../../../../components/ui/Grid/Grid";

export default function Selection() {
  const { headerData, bodyData } = useFetchTableData("/data/tableData.json");
  const { value: selectedValue, handleChange: handleSelectChange } = useInputState<string | null>(null);
  const { value: checkedValues, handleChange: handleCheckboxChange } = useInputState<string[]>([]);

  return (
    <GridLayout defaultOpen={1} navigationType="Accordion">
      <Header text="Selection" />

      <Box sx={conteiner}>
        <Box sx={inputconteiner}>
          <InputText type="search" placeholder="Insert article's name" nome="search" />
          <SelectInput
            names={["", "Accepted", "Duplicated", "Rejected", "Unclassified"]}
            values={["", "Accepted", "Duplicated", "Rejected", "Unclassified"]}
            onSelect={handleSelectChange}
            selectedValue={selectedValue}
            page={"selection"}
          />
          <ComboBox
            text="filter options"
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
          />
        </Box>
      </Box>

      <Box ml={"3em"} mr={"3em"} w={"78vw"}>
        <DynamicTable headerData={headerData} bodyData={bodyData} filteredColumns={checkedValues} />
        <StudySelectionArea />
      </Box>
    </GridLayout>
  );
}
