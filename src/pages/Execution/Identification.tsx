import { Box } from "@chakra-ui/react";
import DataBaseCard from "./Cards/DatabaseCards";
import Header from "../../components/ui/Header/Header";
import FlexLayout from "../../components/ui/Flex/Flex";
import useFetchDataBases from "../../hooks/fetch/useFetchDataBases";
import { conteiner, dataBaseconteiner } from "./styles/Identification";

export default function Identification() {
  const { databases } = useFetchDataBases("/data/dataBases.json");
  return (
    <FlexLayout defaultOpen={1} navigationType="Accordion">
      <Header text="Studies Identification" />
      <Box sx={conteiner}>
        <DataBaseCard text="All data bases" type="allData" />
        <Box sx={dataBaseconteiner}>
          {databases.map((data) => {
            return <DataBaseCard text={data.dbName} type={data.type} />;
          })}
        </Box>
      </Box>
    </FlexLayout>
  );
}
