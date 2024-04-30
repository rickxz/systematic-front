import GridLayout from "../../components/ui/Grid/Grid";
import Header from "../../components/ui/Header/Header";
import NavButton from "../../components/Buttons/NavButton";
import { Progress, FormControl, Box } from "@chakra-ui/react";
import { buttonBox, formControl } from "./styles/partThreeStyles";
import TextAreaInput from "../../components/Inputs/InputTextArea";
import InteractiveTable from "../../components/Tables/InteractiveTable";

export default function ProtocolPartThree() {
  return (
    <GridLayout navigationType="Accordion" defaultOpen={0}>
      <Box w={"100%"}>
        <Header text="Protocol" />
        <Progress value={66} />
        <FormControl sx={formControl}>
          <InteractiveTable />
          <TextAreaInput label="Analysis and Synthesis" placeholder="Enter your analysis" />
          <InteractiveTable />
        </FormControl>
        <Box sx={buttonBox}>
          <NavButton text="Save Protocol" path="/newRevision/identification" />
        </Box>
      </Box>
    </GridLayout>
  );
}
