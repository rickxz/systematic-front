import { Box } from "@chakra-ui/react";
import useInputState from "../../../../hooks/useInputState";
import FlexLayout from "../../../../components/ui/Flex/Flex";
import Header from "../../../../components/ui/Header/Header";
import ComboBox from "../../../../components/Inputs/ComboBox";
import InputText from "../../../../components/Inputs/InputText";
import SelectInput from "../../../../components/Inputs/SelectInput";
import DynamicTable from "../../../../components/Tables/DynamicTable";
import useFetchTableData from "../../../../hooks/fetch/useFetchTableData";
import { conteiner, inputconteiner } from "../../styles/executionStyles";

export default function Extraction() {
  const { headerData, bodyData } = useFetchTableData("/data/tableData.json");
  const { value: checkedValues, handleChange: handleCheckboxChange } = useInputState<string[]>([]);
  const { value: selectedValue, handleChange: handleSelectChange } = useInputState<string | null>(null);
  return (
    <FlexLayout defaultOpen={1} navigationType="Accordion">
      <Header text="Extraction" />
      <Box sx={conteiner}>
        <Box sx={inputconteiner}>
          <InputText type="search" placeholder="Insert article's name" nome="search" />
          <SelectInput
            names={["", "Accepted", "Duplicated", "Rejected", "Unclassified"]}
            values={["", "Accepted", "Duplicated", "Rejected", "Unclassified"]}
            onSelect={handleSelectChange}
            selectedValue={selectedValue}
            page={"protocol"}
          />
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
        </Box>
      </Box>

      <Box marginLeft={"3em"} marginRight={"3em"} w={"78vw"}>
        <DynamicTable headerData={headerData} bodyData={bodyData} filteredColumns={checkedValues} tableType={"extraction"} />
      </Box>
    </FlexLayout>
  );
}
