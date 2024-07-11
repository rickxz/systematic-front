import { Box, FormControl, Text } from "@chakra-ui/react";
import Header from "../../components/ui/Header/Header";
import InputText from "../../components/Inputs/InputText";
import NavButton from "../../components/Buttons/NavButton";
import InputTextArea from "../../components/Inputs/InputTextArea";
import ResearcherFilter from "../UserArea/subcomponents/ResearcherFilter";
import FlexLayout from "../../components/ui/Flex/Flex";
import { useState } from "react";

export default function NovaRevisao() {
  const [searchString, setSearchString] = useState("");
  return (
    //impossivel alinhar esse texto com esse input
    <FlexLayout navigationType="Accordion" defaultOpen={0}>
      <Header text="New Systematic Review" />

      <FormControl mt={"20px"} display={"flex"} gap={5} flexDir={"column"} w={"70%"} alignItems={"center"} ml={"10em"}>
      
      <Text mb={-10}  fontWeight={"500"}>Title</Text>
      <InputText
            placeholder="Enter the review title"
            type="text"
            nome="text"
            setSearchString={setSearchString}
          />

        <InputTextArea label="Description" placeholder="Enter the review description"></InputTextArea>
        
        <ResearcherFilter />

        <Box ml={"71%"}> {/* isso aq ta uma porquisse pq dependendo da tela ele muda de lugar, nao sei como arrumar*/}
          <NavButton path={"/newRevision/protocol"} text="Create new Review" />
        </Box>
      </FormControl>
    </FlexLayout>
  );
}
