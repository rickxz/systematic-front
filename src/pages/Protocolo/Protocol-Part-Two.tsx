import Header from "../../components/ui/Header/Header";
import NavButton from "../../components/Buttons/NavButton";
import { Progress, FormControl, Box, Checkbox, Flex } from "@chakra-ui/react";
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
        <Progress value={66} w={"100%"} color={"black"} />

        <FormControl sx={conteiner}>
          
          <TextAreaInput value={''} onChange={(e) => {e}}  label="Search String" placeholder="Enter the search string" />
          
          <TextAreaInput value={''} onChange={(e) => {e}}  label="Study Type Definition" placeholder="Enter the study type definition" />
          
          <TextAreaInput value={''} onChange={(e) => {e}}  label="Data Colletion Process" placeholder="Enter the data colletion process" />

          <Flex>
            <AddTextTable url={''} id={''} text="Research Questions" placeholder="Enter the other Research Questions"/>
          </Flex>

          <FormControl sx={flex}>
            <AddTextTable url={''} id={''} text="Keywords" placeholder="Enter the keywords related to your review"/>
          </FormControl>

          <AddSelectionTable
            label="Languages"
            type="studiesLanguages"
            url={''}
            options={["ENGLISH", "PORTUGUESE", "FRENCH", "SPANISH", "GERMAN"]}
            placeholder={"Select language"}
            typeField="select"
          />

          <AddTextTable id={''} text="Inclusion criteria" placeholder="Enter the criteria" url={''}/>        
         
          <AddTextTable id={''} text="Exclusion criteria" placeholder="Enter the criteria" url={''}/>
          
          <TextAreaInput value={''} onChange={() => {}}  label="Sources Selection Criteria" placeholder="Enter the sources selection criteria" />
         
          <AddSelectionTable
            label="Databases and Infortion Source"
            type="databases" 
            url={''}
            options={["Google Scholar", "Scopus", "Scielo", "BDTD", "PubMed", "Expert Suggestion",
               "Backward Snowballing", "Forward Snowballing", "Grey Literature Sources"]}
            placeholder={"Select Data Base"}
            typeField="select"
          />

          <TextAreaInput value={''} onChange={(e) => {e}} label="Research Strategy" placeholder="Enter research strategy" />
          
          <TextAreaInput value={''} onChange={(e) => {e}} label="Article Selection Process" placeholder="Enter selection process" />

        </FormControl>
       
        <Box sx={btnBox}>
          <NavButton event={async () => {}} text='Return'/>
          <NavButton event={async () => {}} text="Next" />
        </Box>
      </Box>
    </FlexLayout>
  );
}
