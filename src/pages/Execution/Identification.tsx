import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import DataBaseCard from "./Cards/DatabaseCards";
import Header from "../../components/ui/Header/Header";
import GridLayout from "../../components/ui/Grid/Grid";

interface Database {
  id: string;
  dbName: string;
  type: string;
}

export default function Identification() {
  const [databases, setdatabase] = useState<Database[] | []>([]);

  const fetchData = async () => {
    try {
      const response = await fetch("/data/dataBases.json");
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
    <GridLayout navigationType="Accordion">
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
