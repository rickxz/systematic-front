import { FormControl, Grid, GridItem } from "@chakra-ui/react";
import Sidebar from "../../components/ui/NavBar/Sidebar";
import Header from "../../components/ui/Header/Header";
import InputText from "../../components/Inputs/InputText";
import InputTextArea from "../../components/Inputs/InputTextArea";
import NavButton from "../../components/Buttons/NavButton";
import ResearcherFilter from "../home/subcomponents/ResearcherFilter";
export default function NovaRevisao() {
  return (
    <Grid templateColumns={"repeat(3,1fr)"}>
      <Sidebar type="Accordion" />
      <GridItem>
        <Header text="New Systematic Review" />
        <FormControl mt={"20px"} display={"flex"} gap={5} flexDir={"column"} w={"100%"}>
          <InputText label="Title:" placeholder="Enter review title" type="text" nome="text" />
          <InputTextArea label="Description:" placeholder="Enter review description"></InputTextArea>
          <ResearcherFilter></ResearcherFilter>
          <NavButton path={"/newRevision/protocol"} text="Create new Review" />
        </FormControl>
      </GridItem>
    </Grid>
  );
}
