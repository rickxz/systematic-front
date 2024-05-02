import Header from "../../components/ui/Header/Header";
import NavButton from "../../components/Buttons/NavButton";
import { Progress, FormControl, Box } from "@chakra-ui/react";
import { buttonBox, formControl } from "./styles/partThreeStyles";
import TextAreaInput from "../../components/Inputs/InputTextArea";
import InteractiveTable from "../../components/Tables/InteractiveTable";
import FlexLayout from "../../components/ui/Flex/Flex";

export default function ProtocolPartThree() {
  return (
    <FlexLayout navigationType="Accordion" defaultOpen={0}>
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
    </FlexLayout>
  );
}
