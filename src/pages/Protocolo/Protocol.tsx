import { Progress } from "@chakra-ui/react";
import { Box, FormControl } from "@chakra-ui/react";
import GridLayout from "../../components/ui/Grid/Grid";
import Header from "../../components/ui/Header/Header";
import NavButton from "../../components/Buttons/NavButton";
import { btnBox, formControl } from "./styles/partOneStyles";
import TextAreaInput from "../../components/Inputs/InputTextArea";

export default function Protocol() {
  return (
    <GridLayout defaultOpen={0} navigationType="Accordion">
      <Header text="Protocol" />
      <Progress value={0} />
      <FormControl sx={formControl}>
        <TextAreaInput label="Objectives:" placeholder="What are your goals?" />
        <TextAreaInput label="Main question:" placeholder="The reason behind your research..." />
      </FormControl>
      <Box sx={btnBox}>
        <NavButton text="Next" path="/newRevision/protocolpartTwo" w={"30%"} />
      </Box>
    </GridLayout>
  );
}
