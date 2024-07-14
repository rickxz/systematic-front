import Header from "../../components/ui/Header/Header";
import NavButton from "../../components/Buttons/NavButton";
import { Progress, FormControl, Box } from "@chakra-ui/react";
import { btnBox, conteiner } from "./styles/partTwooStyles";
import TextAreaInput from "../../components/Inputs/InputTextArea";
import InteractiveTable from "../../components/Tables/InteractiveTable";
import { Row } from "../../hooks/useInteractiveTable";
import FlexLayout from "../../components/ui/Flex/Flex";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useCreateProtocolThree from '../../hooks/revisions/useCreateProtocolThree';
import { useLocation } from "react-router-dom";

export default function ProtocolPartThree() {
  const [analysis, setAnalysis] = useState('');
  const [questions, setQuestions] = useState<string[]>([]);
  const { id = '' } = useParams();
  const location = useLocation();
  const {keywords, languages, databases, researchStrategy, selectProcess, 
    dataAcquisition, InclusionCriteria, exclusionCriteria} = location.state || {};

  useEffect(() => {
    console.log(keywords, languages);
    console.log(id);
    console.log("protocolPartThree");
  })

  async function handleData(){
    useCreateProtocolThree(analysis, questions, keywords, languages, databases, researchStrategy, selectProcess, 
        dataAcquisition, InclusionCriteria, exclusionCriteria, id);
    window.location.href = `http://localhost:5173/#/newRevision/identification`;
  }

  function handleSave(data: Row[]){
    const newQuestions: string[] = [];
    data.map((item) => {newQuestions.push(item.question)});
    setQuestions(newQuestions)
  };

  function handleAnalysisAndSynthesis(e: React.ChangeEvent<HTMLTextAreaElement>){
    setAnalysis(e.target.value);
  }

  return (
    <FlexLayout defaultOpen={0} navigationType="Accordion">

      <Box w={"100%"} display={"flex"}
      flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>

        <Header text="Protocol" />
        <Progress value={33} w={"100%"}/>

        <FormControl sx={conteiner}>

          <InteractiveTable onSave={handleSave} />
          <TextAreaInput label="Analysis and Synthesis" placeholder="Enter your analysis" onChange={handleAnalysisAndSynthesis}/>
        
        </FormControl>

        <Box sx={btnBox}>
          <NavButton text="save" event={handleData} w={"fit-content"} />
        </Box>

      </Box>
      
    </FlexLayout>
  );
}
