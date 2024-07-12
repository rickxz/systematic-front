import { Box, FormControl } from "@chakra-ui/react";
import Header from "../../components/ui/Header/Header";
import InputText from "../../components/Inputs/InputText";
import NavButton from "../../components/Buttons/NavButton";
import InputTextArea from "../../components/Inputs/InputTextArea";
import ResearcherFilter from "../UserArea/subcomponents/ResearcherFilter";
import FlexLayout from "../../components/ui/Flex/Flex";
import { useState } from "react";
import { flex } from "./styles/finalizationStyles";

export default function NovaRevisao() {
  const [searchString, setSearchString] = useState("");
  return (
    <FlexLayout navigationType="Accordion" defaultOpen={0}>
      <Header text="New Systematic Review" />

      <FormControl mt={"20px"} display={"flex"} gap={5} flexDir={"column"} w={"100%"} alignItems={"center"} >
      
      <InputText
            label="Title"
            placeholder="Enter the review title"
            type="text"
            nome="text"
            setSearchString={setSearchString}
            labelAbove={true} // Passa a prop labelAbove como true
          />

        <InputTextArea label="Description" placeholder="Enter the review description"></InputTextArea>
        
        <ResearcherFilter />

        <Box w={"60vw"} display={"flex"} alignItems={"center"} justifyContent={"end"}>
          <NavButton path={"/newRevision/protocol"} text="Create new Review" />
        </Box>
      </FormControl>
    </FlexLayout>
  );
}
