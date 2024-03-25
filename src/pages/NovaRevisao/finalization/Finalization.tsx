import { Box, Flex, Textarea } from "@chakra-ui/react";
import useInputState from "../../../hooks/useInputState";
import GridLayout from "../../../components/ui/Grid/Grid";
import Header from "../../../components/ui/Header/Header";
import ComboBox from "../../../components/Inputs/ComboBox";
import InputText from "../../../components/Inputs/InputText";
import SelectInput from "../../../components/Inputs/SelectInput";
import EventButton from "../../../components/Buttons/EventButton";
import DynamicTable from "../../../components/Tables/DynamicTable";
import useFetchTableData from "../../../hooks/fetch/useFetchTableData";
import { btnStyles, conteiner, flex, inputconteiner, tableconteiner, textArea } from "../styles/finalizationStyles";

export default function Finalization() {
  const { headerData, bodyData } = useFetchTableData("/data/tableData.json");
  const { value: selectedValue, handleChange: handleSelectChange } = useInputState<string | null>(null);
  const { value: checkedValues, handleChange: handleCheckboxChange } = useInputState<string[]>([]);

  return (
    <GridLayout defaultOpen={2} navigationType="Accordion">
      <Header text="Review Finalization" />
      <Flex sx={flex}>
        <Box sx={conteiner}>
          <Box sx={inputconteiner}>
            <InputText type="search" placeholder="Insert article's name" nome="search" />
            <SelectInput
              names={["", "Accepted", "Duplicated", "Rejected", "Unclassified"]}
              values={["", "Accepted", "Duplicated", "Rejected", "Unclassified"]}
              onSelect={handleSelectChange}
              selectedValue={selectedValue}
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
      </Flex>
      <Box sx={tableconteiner}>
        <DynamicTable headerData={headerData} bodyData={bodyData} filteredColumns={checkedValues} />
        <Textarea sx={textArea} placeholder="Write stuff here..."></Textarea>
        <Flex justifyContent="flex-end">
          <EventButton
            sx={btnStyles}
            text={"Export"}
            event={function (): void {
              console.log("Export the Review!");
            }}
          />
        </Flex>
      </Box>
    </GridLayout>
  );
}
