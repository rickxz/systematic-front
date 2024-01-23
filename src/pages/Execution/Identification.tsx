import { Box, Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../../components/ui/NavBar/Sidebar";
import Header from "../../components/ui/Header/Header";
import DataBaseCard from "./Cards/DatabaseCards";

export default function Identification() {
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
            <DataBaseCard text="Scopus" type="" />
            <DataBaseCard text="Scopus" type="" />
            <DataBaseCard text="Scopus" type="" />
            <DataBaseCard text="Scopus" type="" />
          </Box>
        </Box>
      </GridItem>
    </Grid>
  );
}
