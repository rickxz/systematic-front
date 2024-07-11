import Header from "../../components/ui/Header/Header";
import NavButton from "../../components/Buttons/NavButton";
import { Progress, FormControl, Box } from "@chakra-ui/react";
import { btnBox, conteiner, flex } from "./styles/partTwooStyles";
import TextAreaInput from "../../components/Inputs/InputTextArea";
import AddTextTable from "../../components/AddDataFields/AddTextTable";
import AddCriteriaTable from "../../components/AddDataFields/AddCriteriaTable";
import AddSelectionTable from "../../components/AddDataFields/AddSelectionTable";
import FlexLayout from "../../components/ui/Flex/Flex";
import { useState } from "react";
import { useParams } from "react-router-dom";
import useCreateProtocolTwo from "../../hooks/revisions/useCreateProtocolTwo";


export default function ProtocolPartTwo2() {
  const [keywords, setKeywords] = useState<string[]>([]);
  const [InclusionCriteria, setInclusionCriteria] = useState<{ description: string; type: "inclusion" | "exclusion"; }[]>([]);
  const [exclusionCriteria, setExclusionCriteria] = useState<{ description: string; type: "inclusion" | "exclusion"; }[]>([]);
  const [languages, setLanguages] = useState<string[]>([]);
  const [databases, setDatabases] = useState<string[]>([]);
  const [researchStrategy, setResearchStrategy] = useState<string>('');
  const [selectProcess, setSelectProcess] = useState<string>('');
  const [dataAcquisition, setDataAcquisition] = useState<string>('');
  const { id = '' } = useParams();

  async function handleData(){
    useCreateProtocolTwo(keywords, databases, researchStrategy, selectProcess, dataAcquisition, id);
  }

  function handleResearchStrategy(e: React.ChangeEvent<HTMLTextAreaElement>){
    setResearchStrategy(e.target.value);
  }

  function handleSelectProcess(e: React.ChangeEvent<HTMLTextAreaElement>){
    setSelectProcess(e.target.value);
  }

  function handleDataAcquisition(e: React.ChangeEvent<HTMLTextAreaElement>){
    setDataAcquisition(e.target.value);
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
            onUpdate={setLanguages}
            options={["", "English", "Portuguese", "French", "Spanish", "German"]}
            placeholder={"Languages:"}
            typeField="select"
          />

          <AddCriteriaTable text="Inclusion Criteria:" placeholder="Enter the criteria" onUpdate={setInclusionCriteria}/>
          <AddCriteriaTable text="Exclusion Criteria:" placeholder="Enter the criteria" onUpdate={setExclusionCriteria}/>

          <AddSelectionTable
            onUpdate={setDatabases}
            options={["", "Google Scholar", "Scopus", "Scielo", "BDTD", "PubMed"]}
            placeholder={"Data bases"}
            typeField="select"
          />

          <TextAreaInput onChange={handleResearchStrategy} label="Research Strategy" placeholder="Enter research strategy" />
          <TextAreaInput onChange={handleSelectProcess} label="Article Selection Process" placeholder="Enter selection process" />
          <TextAreaInput onChange={handleDataAcquisition}  label="Data Acquisition" placeholder="Enter the data acquisition method" />
        </FormControl>

        <Box sx={btnBox}>
          <NavButton text="Next" event={handleData} path="/newRevision/protocolpartThree" w={"fit-content"} />
        </Box>

      </Box>
      
    </FlexLayout>
  );
}
