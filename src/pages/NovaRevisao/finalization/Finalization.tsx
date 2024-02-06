import { useState } from "react";
import EventButton from "../../../components/Buttons/EventButton";
import NavButton from "../../../components/Buttons/NavButton";
import InputText from "../../../components/Inputs/InputText";
import SelectInput from "../../../components/Inputs/SelectInput";
import DynamicTable from "../../../components/Tables/DynamicTable";
import Header from "../../../components/ui/Header/Header";
import Sidebar from "../../../components/ui/NavBar/Sidebar";

import {Box, Flex} from "@chakra-ui/react";
import CheckboxInput from "../../../components/Inputs/Checkbox";

export default function Finalization() {

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

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  const [selectedValue, setSelectedValue] = useState<string | null>(null);


  return (
    <Flex>
      <Sidebar type="accordion"/>

      <Flex flexDirection="column" p="2%">

        <Header text="Review Finalization" />

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
          <EventButton
            mt={8}
            text="Sort by Score"
            event={() => {
              console.log("sorted");
            }}
          />
        </Box>

        <DynamicTable headerData={headerData} bodyData={bodyData} />

        <Box
          display={"flex"}
          flexDir={"row"}
          alignItems={"center"}
          columnGap={5}
          alignSelf={"baseline"}
        >
          <NavButton text={"Back"} path={"/newRevision/identification"} />
          <EventButton
            mt={2}
            event={function (): void {
              console.log("Finished the Review!");
            }}
            text={"Finish Review"}
          />
        </Box>
        
      </Flex>
    </Flex>
  )
}
