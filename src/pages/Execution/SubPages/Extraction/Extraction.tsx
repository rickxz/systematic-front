import { Box } from "@chakra-ui/react";
import useInputState from "../../../../hooks/useInputState";
import GridLayout from "../../../../components/ui/Grid/Grid";
import Header from "../../../../components/ui/Header/Header";
import InputText from "../../../../components/Inputs/InputText";
import CheckboxInput from "../../../../components/Inputs/Checkbox";
import SelectInput from "../../../../components/Inputs/SelectInput";
import DynamicTable from "../../../../components/Tables/DynamicTable";
import useFetchTableData from "../../../../hooks/fetch/useFetchTableData";

export default function Extraction() {
  const { headerData, bodyData } = useFetchTableData("/data/tableData.json");
  const { value: checkedValues, handleChange: handleCheckboxChange } = useInputState<string[]>([]);
  const { value: selectedValue, handleChange: handleSelectChange } = useInputState<string | null>(null);
  return (
    <GridLayout defaultOpen={1} navigationType="Accordion">
      <Header text="Extraction" />
      <Box mt={10} w={"80%"} display={"flex"} flexWrap={"wrap"} flexDir={"column"} rowGap={5}>
        <Box
          display={"flex"}
          flexDir={"row"}
          w={"60%"}
          alignContent={"center"}
          justifyContent={"space-between"}
          gap={"1rem"}
        >
          <InputText type="search"  placeholder="Insert article's name" nome="search" />
          <SelectInput
            names={["", "Accepted", "Duplicated", "Rejected", "Unclassified"]}
            values={["", "Accepted", "Duplicated", "Rejected", "Unclassified"]}
            onSelect={handleSelectChange}
            selectedValue={selectedValue}
          />
        </Box>

        <Box display={"flex"} flexDir={"row"} columnGap={20}>
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
      </Box>
      <DynamicTable headerData={headerData} bodyData={bodyData} filteredColumns={checkedValues} />
    </GridLayout>
  );
}
