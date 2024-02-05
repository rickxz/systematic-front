import GridLayout from "../../components/ui/Grid/Grid";
import Header from "../../components/ui/Header/Header";
import NavButton from "../../components/Buttons/NavButton";
import { Progress, FormControl, Box } from "@chakra-ui/react";
import TextAreaInput from "../../components/Inputs/InputTextArea";
import AddTextTable from "../../components/AddDataFields/AddTextTable";

export default function ProtocolPartThree() {
  return (
    <GridLayout navigationType="Accordion">
      <Header text="Protocol" />
      <Progress value={66} />
      <FormControl display={"flex"} flexDir={"column"} mt={10} rowGap={10}>
        <AddTextTable text={"Data extraction form"} placeholder="Enter data extraction criteria" />
        <TextAreaInput label="Analysis and Synthesis" placeholder="Enter your analysis" />
        <AddTextTable text={"Study Risk of Bias (RoB) Assesment"} placeholder="..." />
      </FormControl>
      <Box ml={"75%"} alignSelf={"flex-end"}>
        <NavButton text="Save Protocol" path="/newRevision/identification" />
      </Box>
    </GridLayout>
  );
}
