import { Box } from "@chakra-ui/react";
import DataBaseCard from "./Cards/DatabaseCards";
import Header from "../../components/ui/Header/Header";
import useFetchDataBases from "../../hooks/fetch/useFetchDataBases";
import { conteiner, dataBaseconteiner } from "./styles/Identification";
import FlexLayout from "../../components/ui/Flex/Flex";

export default function Identification() {
  const { databases } = useFetchDataBases("/data/dataBases.json");

  return (
    <FlexLayout defaultOpen={1} navigationType="Accordion">
      <Header text="Studies Identification" />
      <Box
        sx={conteiner}
        justifyItems={"center"}
        alignItems={"center"}
        display={"flex"}
        flexDirection={"column"}
        w={"85vw"}
      >
        <Box borderRadius={"30px"} h={"fit-content"}>
          <DataBaseCard text="All data bases" type="allData" />
        </Box>

        <Box sx={dataBaseconteiner}>
          {databases.map((data) => {
            return <DataBaseCard text={data.dbName} type={data.type} />;
          })}
        </Box>
      </Box>
    </FlexLayout>
  );
}
