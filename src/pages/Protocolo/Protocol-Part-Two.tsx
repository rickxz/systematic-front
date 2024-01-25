import Header from "../../components/ui/Header/Header";
import Sidebar from "../../components/ui/NavBar/Sidebar";
import NavButton from "../../components/Buttons/NavButton";
import TextAreaInput from "../../components/Inputs/InputTextArea";
import AddTextTable from "../../components/AddDataFields/AddTextTable";
import { Grid, GridItem, Progress, FormControl, Box } from "@chakra-ui/react";
import AddSelectionTable from "../../components/AddDataFields/AddSelectionTable";

export default function ProtocolPartTwo2() {
  return (
    <Grid templateColumns={"1fr 1fr 1fr"}>
      <Sidebar type="Accordion" />
      <GridItem justifyContent={"center"} alignContent={"center"} display={"flex"} flexDir={"column"} ml={"5%"}>
        <Header text="Protocol" />
        <Progress value={33} />
        <FormControl display={"flex"} flexDir={"column"} gap={20} mt={20}>
          <FormControl display={"flex"}>
            <AddTextTable text="Keywords" placeholder="Enter keywords" />
          </FormControl>

          <AddSelectionTable
            options={["", "English", "Portuguese", "French", "Spanish", "German"]}
            placeholder={"Languages:"}
            typeField="select"
          />

          <AddTextTable text="Inclusion Criteria:" placeholder="Enter the criteria" />
          <AddTextTable text="Exclusion Criteria:" placeholder="Enter the criteria" />

          <AddSelectionTable
            options={["", "Google Scholar", "Scopus", "Scielo", "BDTD", "PubMed"]}
            placeholder={"Data bases"}
            typeField="select"
          />

          <TextAreaInput label="Research Strategy" placeholder="Enter research strategy" />
          <TextAreaInput label="Article Selection Process" placeholder="Enter selection process" />
          <TextAreaInput label="Data Acquisition" placeholder="Enter the data acquisition method" />
        </FormControl>

        <Box alignSelf={"flex-end"}>
          <NavButton text="Next" path="/newRevision/protocolpartThree" />
        </Box>
      </GridItem>
    </Grid>
  );
}
