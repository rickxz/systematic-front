import Header from "../../components/ui/Header/Header";
import NavButton from "../../components/Buttons/NavButton";
import { Progress, FormControl, Box } from "@chakra-ui/react";
import { buttonBox, formControl } from "./styles/partThreeStyles";
import TextAreaInput from "../../components/Inputs/InputTextArea";
import InteractiveTable from "../../components/Tables/InteractiveTable";
import FlexLayout from "../../components/ui/Flex/Flex";
import { Row } from "../../hooks/useInteractiveTable";

export default function ProtocolPartThree() {
  const handleSave = (data: Row[]) => {
    console.log(data);
  };

  return (
    <FlexLayout navigationType="Accordion" defaultOpen={0}>
      <Box w={"100%"} display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"}>
        <Header text="Protocol" />
        <Progress w={"100%"} value={66} />
        <FormControl sx={formControl}>
          <InteractiveTable onSave={handleSave} />
          <TextAreaInput label="Analysis and Synthesis" placeholder="Enter your analysis" />
          <InteractiveTable onSave={handleSave} />
        </FormControl>
        <Box sx={buttonBox}>
          <NavButton text="Save Protocol" path="/newRevision/identification" />
        </Box>
      </Box>
    </FlexLayout>
  );
}
