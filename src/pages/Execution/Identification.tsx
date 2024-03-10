import { Box } from "@chakra-ui/react";
import DataBaseCard from "./Cards/DatabaseCards";
import Header from "../../components/ui/Header/Header";
import GridLayout from "../../components/ui/Grid/Grid";
import useFetchDataBases from "../../hooks/fetch/useFetchDataBases";

export default function Identification() {
  const { databases } = useFetchDataBases("/data/dataBases.json");
  return (
    <GridLayout defaultOpen={1} navigationType="Accordion">
      <Header text="Studies Identification" />
      <Box mt={20}>
        <DataBaseCard text="All data bases" type="allData" />
        <Box
          display={"flex"}
          flexDir={"row"}
          w={"80vw"}
          flexWrap={"wrap"}
          justifyContent={"space-between"}
          mt={10}
          h={"fit-content"}
          alignSelf={"center"}
          justifySelf={"center"}
          margin={"auto"}
        >
          {databases.map((data) => {
            return <DataBaseCard text={data.dbName} type={data.type} />;
          })}
        </Box>
      </Box>
    </GridLayout>
  );
}
