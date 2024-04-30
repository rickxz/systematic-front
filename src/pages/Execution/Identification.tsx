import { Box } from "@chakra-ui/react";
import DataBaseCard from "./Cards/DatabaseCards";
import Header from "../../components/ui/Header/Header";
import useFetchDataBases from "../../hooks/fetch/useFetchDataBases";
import { conteiner, dataBaseconteiner } from "./styles/Identification";
import GridLayout from "../../components/ui/Grid/Grid";

export default function Identification() {
  const { databases } = useFetchDataBases("/data/dataBases.json");

  return (
    <GridLayout defaultOpen={1} navigationType="Accordion">
      <Header text="Studies Identification" />

      <Box sx={conteiner} justifyItems={"center"} alignItems={"center"} display={"flex"} flexDirection={"column"}>
        <Box borderRadius={"30px"} h={"fit-content"}>
          <DataBaseCard text="All data bases" type="allData" />
        </Box>

        <Box sx={dataBaseconteiner}>
          {databases.map((data) => {
            return <DataBaseCard text={data.dbName} type={data.type} />;
          })}
        </Box>
      </Box>
    </GridLayout>
  );
}
