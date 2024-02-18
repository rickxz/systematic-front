import { Box } from "@chakra-ui/react";
import useInputState from "../../../../hooks/useInputState";
import GridLayout from "../../../../components/ui/Grid/Grid";
import Header from "../../../../components/ui/Header/Header";
import InputText from "../../../../components/Inputs/InputText";
import NavButton from "../../../../components/Buttons/NavButton";
import CheckboxInput from "../../../../components/Inputs/Checkbox";
import SelectInput from "../../../../components/Inputs/SelectInput";
import EventButton from "../../../../components/Buttons/EventButton";
import DynamicTable from "../../../../components/Tables/DynamicTable";
import useFetchTableData from "../../../../hooks/fetch/useFetchTableData";

export default function Insertion() {
  const { headerData, bodyData } = useFetchTableData("/data/tableData.json");
  const { value: selectedValue, handleChange: handleSelectChange } = useInputState<string | null>(null);
  const { value: checkedValues, handleChange: handleCheckboxChange } = useInputState<string[]>([]);
  return (
    <GridLayout navigationType="Accordion">
      <Header text="Insertion" />
      <Box mt={10} w={"80%"} display={"flex"} flexWrap={"wrap"} flexDir={"column"} rowGap={5}>
        <Box
          display={"flex"}
          flexDir={"row"}
          w={"60%"}
          alignContent={"center"}
          justifyContent={"space-between"}
          gap={"1rem"}
        >
          <InputText type="search" label="Search : " placeholder="Insert article's name" nome="search" />
          <SelectInput
            label="Classification:"
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
      <Box
        display={"flex"}
        flexDir={"row"}
        alignItems={"center"}
        columnGap={5}
        alignSelf={"baseline"}
        ml={"70%"}
        mt={10}
      >
        <NavButton text={"Back"} path={"/newRevision/identification"} w={"200px"} />
        <EventButton
          event={function (): void {
            console.log("Adicionando novo paper!");
          }}
          text={"Add Paper"}
          w={"200px"}
        />
      </Box>
    </GridLayout>
  );
}
