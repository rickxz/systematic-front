import Header from "../../components/ui/Header/Header";
import NavButton from "../../components/Buttons/NavButton";
import { Progress, FormControl, Box } from "@chakra-ui/react";
import { btnBox, conteiner, flex } from "./styles/partTwooStyles";
import TextAreaInput from "../../components/Inputs/InputTextArea";
import AddTextTable from "../../components/AddDataFields/AddTextTable";
import AddSelectionTable from "../../components/AddDataFields/AddSelectionTable";
import FlexLayout from "../../components/ui/Flex/Flex";
import { useState } from "react";


export default function ProtocolPartTwo2() {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [InclusionCriteria, setInclusionCriteria] = useState<string[]>([]);
  const [exclusionCriteria, setExclusionCriteria] = useState<string[]>([]);
  const [language, setLanguage] = useState<string[]>([])

  async function handleData(){
    console.log(keywords);
    console.log(InclusionCriteria);
    console.log(exclusionCriteria);
  }

  return (
    <FlexLayout defaultOpen={0} navigationType="Accordion">

      <Box w={"100%"} display={"flex"}
      flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>

        <Header text="Protocol" />
        <Progress value={33} w={"100%"}/>

        <FormControl sx={conteiner}>
          <FormControl sx={flex}>
            <AddTextTable text="Keywords" placeholder="Enter keywords" onUpdate={setKeywords}/>
          </FormControl>

          <AddSelectionTable
            options={["", "English", "Portuguese", "French", "Spanish", "German"]}
            placeholder={"Languages:"}
            typeField="select"
          />

          <AddTextTable text="Inclusion Criteria:" placeholder="Enter the criteria" onUpdate={setInclusionCriteria}/>
          <AddTextTable text="Exclusion Criteria:" placeholder="Enter the criteria" onUpdate={setExclusionCriteria}/>

          <AddSelectionTable
            options={["", "Google Scholar", "Scopus", "Scielo", "BDTD", "PubMed"]}
            placeholder={"Data bases"}
            typeField="select"
          />

          <TextAreaInput label="Research Strategy" placeholder="Enter research strategy" />
          <TextAreaInput label="Article Selection Process" placeholder="Enter selection process" />
          <TextAreaInput label="Data Acquisition" placeholder="Enter the data acquisition method" />
        </FormControl>

        <Box sx={btnBox}>
          <NavButton text="Next" event={handleData} path="/newRevision/protocolpartThree" w={"fit-content"} />
        </Box>

      </Box>
      
    </FlexLayout>
  );
}
