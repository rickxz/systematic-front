import { Box, Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../../components/ui/NavBar/Sidebar";
import Header from "../../components/ui/Header/Header";
import DataBaseCard from "./Cards/DatabaseCards";
import { useEffect, useState } from "react";

interface Database {
  id: string;
  dbName: string;
  type: string;
}

export default function Identification() {
  const [databases, setdatabase] = useState<Database[] | []>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("../../../public/data/dataBases.json");
      const data = await response.json();
      if (!data) console.log("erro no formado ou arquivo vázio!");
      setdatabase(data.databases);
    } catch (error) {
      console.log("Erro: ", error);
    }
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <Grid templateColumns={"1fr 1fr 1fr"}>
      <Sidebar type="Accordion" />
      <GridItem display={"flex"} flexDir={"column"} ml={"5%"}>
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
      </GridItem>
    </Grid>
  );
}
