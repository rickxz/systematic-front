import { Box } from "@chakra-ui/react";
import useInputState from "../../../../hooks/useInputState";
import GridLayout from "../../../../components/ui/Grid/Grid";
import Header from "../../../../components/ui/Header/Header";
import InputText from "../../../../components/Inputs/InputText";
import CheckboxInput from "../../../../components/Inputs/Checkbox";
import SelectInput from "../../../../components/Inputs/SelectInput";
import StudySelectionArea from "./subcomponents/StudySelectionArea";
import DynamicTable from "../../../../components/Tables/DynamicTable";
import useFetchTableData from "../../../../hooks/fetch/useFetchTableData";
import { ckconteiner, conteiner, inputconteiner } from "../../styles/executionStyles";

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
          />
        </Box>

        <Box sx={ckconteiner}>
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
      </Box>
      <DynamicTable headerData={headerData} bodyData={bodyData} filteredColumns={checkedValues} />
      <StudySelectionArea />
    </GridLayout>
  );
}
