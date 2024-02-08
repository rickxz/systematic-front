import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import GridLayout from "../../../../components/ui/Grid/Grid";
import Header from "../../../../components/ui/Header/Header";
import InputText from "../../../../components/Inputs/InputText";
import CheckboxInput from "../../../../components/Inputs/Checkbox";
import SelectInput from "../../../../components/Inputs/SelectInput";
import DynamicTable from "../../../../components/Tables/DynamicTable";

export default function Extraction() {
  const [headerData, setHeaderData] = useState([]);
  const [bodyData, setBodyData] = useState([]);
  const [checkedValues, setCheckedValues] = useState<string[]>([]);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/tableData.json");
        const data = await response.json();
        if (data && data.headerData && data.bodyData) {
          setHeaderData(data.headerData);
          setBodyData(data.bodyData);
        } else {
          console.error("O arquivo JSON não possui a estrutura esperada.");
        }
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchData();
  }, []);

  const handleCheckboxChange = (selectedItems: string[]) => {
    setCheckedValues(selectedItems);
  };

  const handleSelectChange = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <GridLayout navigationType="Accordion">
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
          />
        </Box>
      </Box>

      <DynamicTable headerData={headerData} bodyData={bodyData} filteredColumns={checkedValues} />
    </GridLayout>
  );
}
