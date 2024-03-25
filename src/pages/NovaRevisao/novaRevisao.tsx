import { Box, FormControl } from "@chakra-ui/react";
import GridLayout from "../../components/ui/Grid/Grid";
import Header from "../../components/ui/Header/Header";
import InputText from "../../components/Inputs/InputText";
import NavButton from "../../components/Buttons/NavButton";
import InputTextArea from "../../components/Inputs/InputTextArea";
import ResearcherFilter from "../UserArea/subcomponents/ResearcherFilter";
export default function NovaRevisao() {
  return (
    <GridLayout navigationType="Accordion" defaultOpen={0}>
      <Header text="New Systematic Review" />
      <FormControl mt={"20px"} display={"flex"} gap={5} flexDir={"column"} w={"80%"} alignItems={"center"} ml={"10em"}>
        <InputText placeholder="Enter review title" type="text" nome="text" />
        <InputTextArea label="Description:" placeholder="Enter review description"></InputTextArea>
        <ResearcherFilter />
        <Box ml={"80%"}>
          <NavButton path={"/newRevision/protocol"} text="Create new Review" />
        </Box>
      </FormControl>
    </GridLayout>
  );
}
