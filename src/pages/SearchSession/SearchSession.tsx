import { Box, Card, Icon, Text } from "@chakra-ui/react";
import GridLayout from "../../components/ui/Grid/Grid";
import Header from "../../components/ui/Header/Header";
import DynamicTable from "../../components/Tables/DynamicTable";
import useFetchTableData from "../../hooks/fetch/useFetchTableData";
import useInputState from "../../hooks/useInputState";
import CheckboxInput from "../../components/Inputs/Checkbox";
import { FaFile } from "react-icons/fa";
import EventButton from "../../components/Buttons/EventButton";
import NavButton from "../../components/Buttons/NavButton";

export default function SearchSession() {
  const { headerData, bodyData } = useFetchTableData("/data/tableData.json");
  const { value: checkedValues, handleChange: handleCheckboxChange } = useInputState<string[]>([]);
  return (
    <GridLayout navigationType="Accordion">
      <Header text={"Database Name-Studies Identification"} />

      <Box mt={10} display={"flex"} flexDir={"row"} columnGap={20}>
        <Box
          w={"40%"}
          display={"flex"}
          flexDir={"column"}
          gap={2}
          justifyContent={"flex-start"}
          alignItems={"flex-start"}
        >
          <Text fontWeight={"bold"} fontSize={18}>
            Search String:{" "}
          </Text>
          <Card h={10} w={"100%"} textAlign={"center"} justifyContent={"center"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Card>
          <Text>
            <b>Number of Papers:</b> 22 <b>Date of search:</b> dd/mm/aa{" "}
          </Text>
          <Text fontWeight={"bold"} fontSize={18}>
            Observation:{" "}
          </Text>
          <Card h={200} w={"100%"} textAlign={"center"} justifyContent={"center"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Card>
        </Box>
        <Box
          ml={"10%"}
          display={"flex"}
          flexDir={"column"}
          rowGap={10}
          width={"50%"}
          justifyContent={"flex-start"}
          textAlign={"initial"}
        >
          <Text fontWeight={"bold"} fontSize={18}>
            Import reference file:{" "}
          </Text>
          <Card h={200} w={"100%"} textAlign={"center"} justifyContent={"center"}>
            <Icon as={FaFile} w={"60px"} h={"60px"} justifySelf={"center"} alignSelf={"center"} ml={"0.5rem"} mb={5} />
            Insert file here
          </Card>
          <EventButton
            event={function (): void {
              window.alert("Duplicated papers are Removed");
            }}
            text={"Remove all Duplicated Papers"}
            w={"fit-content"}
          />
        </Box>
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
