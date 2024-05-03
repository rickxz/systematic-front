import { Box, FormControl } from "@chakra-ui/react";
import Header from "../../components/ui/Header/Header";
import InputText from "../../components/Inputs/InputText";
import NavButton from "../../components/Buttons/NavButton";
import InputTextArea from "../../components/Inputs/InputTextArea";
import ResearcherFilter from "../UserArea/subcomponents/ResearcherFilter";
import FlexLayout from "../../components/ui/Flex/Flex";

export default function NovaRevisao() {
  return (
    <FlexLayout navigationType="Accordion" defaultOpen={0}>
      <Header text="New Systematic Review" />

      <FormControl mt={"20px"} display={"flex"} gap={5} flexDir={"column"} w={"70%"} alignItems={"center"} ml={"10em"}>
        <InputText placeholder="Enter review title" type="text" nome="text" />

        <InputTextArea label="Description:" placeholder="Enter review description"></InputTextArea>

        <ResearcherFilter />

        <Box ml={"71%"}>
          <NavButton path={"/newRevision/protocol"} text="Create new Review" />
        </Box>
      </FormControl>
    </FlexLayout>
  );
}
