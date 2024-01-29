import { useState } from "react";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Header from "../../../../components/ui/Header/Header";
import Sidebar from "../../../../components/ui/NavBar/Sidebar";
import InputText from "../../../../components/Inputs/InputText";
import CheckboxInput from "../../../../components/Inputs/Checkbox";
import SelectInput from "../../../../components/Inputs/SelectInput";
import DynamicTable from "../../../../components/Tables/DynamicTable";

export default function Extraction() {
  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  const headerData = ["IDSS", "ID Paper", "Title", "Author", "Year", "S/S", "S/E", "RP", "Score"];
  const bodyData = [
    [
      "01",
      "00001",
      "Lorem ipsum dolor sit amet consectur",
      "Jão da Silva, Cleitin, et all",
      "2002",
      "undefined",
      "undefined",
      "001",
      100,
    ],
    [
      "01",
      "00001",
      "Lorem ipsum dolor sit amet consectur",
      "Jão da Silva, Cleitin, et all",
      "2002",
      "undefined",
      "undefined",
      "001",
      100,
    ],
    [
      "01",
      "00001",
      "Lorem ipsum dolor sit amet consectur",
      "Jão da Silva, Cleitin, et all",
      "2002",
      "undefined",
      "undefined",
      "001",
      100,
    ],
  ];

  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  return (
    <Grid templateColumns={"1fr 1fr 1fr"}>
      <Sidebar type="Accordion" />
      <GridItem textAlign={"center"} justifySelf={"center"} w={"80vw"} ml={5}>
        <Header text="Selection" />
        <Box mt={10} w={"80%"} display={"flex"} flexWrap={"wrap"} flexDir={"column"} rowGap={5}>
          <Box display={"flex"} flexDir={"row"} w={"60%"} alignContent={"center"} justifyContent={"space-between"}>
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
              name={[
                "ID PAPER",
                "TITLE",
                "AUTHOR",
                "STATUS/SELECTION",
                "STATUS/EXTRACTION",
                "READING PRIORITY",
                "SCORE",
              ]}
              value={["idPaper", "title", "author", "statusSelection", "statusExtraction", "readingPriority", "score"]}
            />
          </Box>
        </Box>

        <DynamicTable headerData={headerData} bodyData={bodyData} />
      </GridItem>
    </Grid>
  );
}
