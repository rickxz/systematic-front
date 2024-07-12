import React from 'react';
import Header from "../../components/ui/Header/Header";
import NavButton from "../../components/Buttons/NavButton";
import { Progress, FormControl, Box } from "@chakra-ui/react";
import { btnBox, conteiner, flex } from "./styles/partTwooStyles";
import TextAreaInput from "../../components/Inputs/InputTextArea";
import AddTextTable from "../../components/AddDataFields/AddTextTable";
import AddSelectionTable from "../../components/AddDataFields/AddSelectionTable";
import FlexLayout from "../../components/ui/Flex/Flex";

export default function ProtocolPartTwo2() {
  return (
    <FlexLayout defaultOpen={0} navigationType="Accordion">
      <Box w={"100%"} display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
        <Header text="Protocol" />
        <Progress value={33} w={"100%"} color={"black"} />
        <FormControl sx={conteiner}>
          <FormControl sx={flex}>
            <AddTextTable text="Keywords" placeholder="Enter the keywords related to your review" />
          </FormControl>
          <AddSelectionTable
            label="Languages"
            options={["English", "Portuguese", "French", "Spanish", "German"]}
            placeholder={"Select language"}
            typeField="select"
          />
          <AddTextTable text="Inclusion Criteria:" placeholder="Enter the criteria" />
          <AddTextTable text="Exclusion Criteria:" placeholder="Enter the criteria" />
          <AddSelectionTable
            label="Data Bases"
            options={["Google Scholar", "Scopus", "Scielo", "BDTD", "PubMed"]}
            placeholder={"Select Data Base"}
            typeField="select"
          />
          <TextAreaInput label="Research Strategy" placeholder="Enter research strategy" />
          <TextAreaInput label="Article Selection Process" placeholder="Enter selection process" />
          <TextAreaInput label="Data Acquisition" placeholder="Enter the data acquisition method" />
        </FormControl>
        <Box sx={btnBox}>
          <NavButton text="Next" path="/newRevision/protocolpartThree" w={"fit-content"} />
        </Box>
      </Box>
    </FlexLayout>
  );
}
