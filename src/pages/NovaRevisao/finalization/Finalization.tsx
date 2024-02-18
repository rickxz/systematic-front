import { Box, Flex, Textarea } from "@chakra-ui/react";
import useInputState from "../../../hooks/useInputState";
import GridLayout from "../../../components/ui/Grid/Grid";
import Header from "../../../components/ui/Header/Header";
import InputText from "../../../components/Inputs/InputText";
import CheckboxInput from "../../../components/Inputs/Checkbox";
import SelectInput from "../../../components/Inputs/SelectInput";
import EventButton from "../../../components/Buttons/EventButton";
import DynamicTable from "../../../components/Tables/DynamicTable";
import useFetchTableData from "../../../hooks/fetch/useFetchTableData";

export default function Finalization() {
  const { headerData, bodyData } = useFetchTableData("/data/tableData.json");
  const { value: selectedValue, handleChange: handleSelectChange } = useInputState<string | null>(null);
  const { value: checkedValues, handleChange: handleCheckboxChange } = useInputState<string[]>([]);

  return (
    <GridLayout navigationType="Accordion">
      <Header text="Review Finalization" />
      <Flex flexDirection="column" gap={5}>
        <Box mt={10} w={"80%"} display={"flex"} flexWrap={"wrap"} flexDir={"column"} rowGap={5}>
          <Box display={"flex"} flexDir={"row"} w={"60%"} alignContent={"center"} columnGap={5}>
            <InputText type="search" label="Search : " placeholder="Insert article's name" nome="search" />
            <SelectInput
              label="Classification:"
              names={["", "Accepted", "Duplicated", "Rejected", "Unclassified"]}
              values={["", "Accepted", "Duplicated", "Rejected", "Unclassified"]}
              onSelect={handleSelectChange}
              selectedValue={selectedValue}
            />
          </Box>
        </Box>

        <Box display={"flex"} flexDir={"row"} columnGap={5}>
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
      </Flex>
      <Box display="flex" flexDirection="column" gap={7}>
        <DynamicTable headerData={headerData} bodyData={bodyData} filteredColumns={checkedValues} />
        <Textarea bg="gray.100" minHeight="20vh" placeholder="Write stuff here..."></Textarea>
        <Flex justifyContent="flex-end">
          <EventButton
            mt={2}
            event={function (): void {
              console.log("Export the Review!");
            }}
            text={"Export"}
            w={"200px"}
          />
        </Flex>
      </Box>
    </GridLayout>
  );
}
