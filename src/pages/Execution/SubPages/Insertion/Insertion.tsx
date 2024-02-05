import { useState } from "react";
import { Box } from "@chakra-ui/react";
import GridLayout from "../../../../components/ui/Grid/Grid";
import Header from "../../../../components/ui/Header/Header";
import InputText from "../../../../components/Inputs/InputText";
import NavButton from "../../../../components/Buttons/NavButton";
import CheckboxInput from "../../../../components/Inputs/Checkbox";
import SelectInput from "../../../../components/Inputs/SelectInput";
import EventButton from "../../../../components/Buttons/EventButton";
import DynamicTable from "../../../../components/Tables/DynamicTable";

export default function Insertion() {
  const headerData = [
    "IDSS",
    "ID Paper",
    "Title",
    "Author",
    "Year",
    "Status/Selection",
    "Status/Extraction",
    "Reading Priority",
    "Score",
  ];

  const bodyData = [
    ["03", "00001", "titulo1", "Jão da Silva, Cleitin, et all", "2002", "undefined", "undefined", "001", 100],

    [
      "02",
      "00006",
      "outroTitulo",
      "Maria Oliveira, Joãozinho, et all",
      "2005",
      "algumTexto",
      "qualquerCoisa",
      "002",
      12,
    ],

    ["04", "00009", "terceiroTitulo", "José Pereira, Ana Souza, et all", "2010", "maisTexto", "outraCoisa", "003", 4],

    [
      "01",
      "00012",
      "quartoTitulo",
      "Fernanda Santos, Carlos Silva, et all",
      "2015",
      "textoAleatório",
      "coisaQualquer",
      "004",
      120,
    ],
  ];
  const [checkedValues, setCheckedValues] = useState<string[]>([]);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  const handleCheckboxChange = (selectedItems: string[]) => {
    setCheckedValues(selectedItems);
  };

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <GridLayout navigationType="Accordion">
      <Header text="Insertion" />
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
              "IDSS",
              "ID PAPER",
              "TITLE",
              "AUTHOR",
              "YEAR",
              "STATUS/SELECTION",
              "STATUS/EXTRACTION",
              "READING PRIORITY",
              "SCORE",
            ]}
            handleCheckboxChange={(selectedItems) => handleCheckboxChange(selectedItems)}
          />
        </Box>
      </Box>

      <DynamicTable headerData={headerData} bodyData={bodyData} filteredColumns={checkedValues} />
      <Box display={"flex"} flexDir={"row"} alignItems={"center"} columnGap={5} alignSelf={"baseline"} ml={"60%"}>
        <NavButton text={"Back"} path={"/newRevision/identification"} />
        <EventButton
          mt={2}
          event={function (): void {
            console.log("Adicionando novo paper!");
          }}
          text={"Add Paper"}
        />
      </Box>
    </GridLayout>
  );
}
