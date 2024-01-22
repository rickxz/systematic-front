import { Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../../components/ui/NavBar/Sidebar";
import Header from "../../components/ui/Header/Header";
import DynamicTable from "../../components/Tables/DynamicTable";
import { FaRegCircle } from "react-icons/fa";
export default function KeyWordScreen() {
  const headerData = ["", "keyword", "Frequency"];
  const bodyData = [
    ["", "Lorem", 5],
    ["", "Lorem", 3],
    ["", "Lorem", 2],
  ];
  return (
    <Grid templateColumns={"1fr 1fr 1fr"}>
      <Sidebar type="Accordion" />
      <GridItem display={"flex"} flexDir={"column"} alignContent={"center"}>
        <Header text="Keyword Screen" />
        <DynamicTable headerData={headerData} bodyData={bodyData} icon={<FaRegCircle />} />
      </GridItem>
    </Grid>
  );
}
