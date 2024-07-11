import Header from "../../components/ui/Header/Header";
import NavButton from "../../components/Buttons/NavButton";
import { Progress, FormControl, Box } from "@chakra-ui/react";
import { buttonBox, formControl } from "./styles/partThreeStyles";
import TextAreaInput from "../../components/Inputs/InputTextArea";
import InteractiveTable from "../../components/Tables/InteractiveTable";
import FlexLayout from "../../components/ui/Flex/Flex";
import { Row } from "../../hooks/useInteractiveTable";
import useCreateProtocolThree from "../../hooks/revisions/useCreateProtocolThree";
import { useState } from "react";

export default function ProtocolPartThree() {
  const [analysisAndSynthesisProcess, setAnalysisAndSynthesisProcess] = useState('');
  const [questions, setQuestions] = useState<string[]>([]);

  async function sendData(){
    for(let i = 0; i < questions.length; i++){
      if(questions[i] == ''){
        questions.splice(i, 1);
      }
    }
    await useCreateProtocolThree(questions, analysisAndSynthesisProcess);
  }

  function handleSave(data: Row[]){
    const newQuestions: string[] = [];
    data.map((item) => {newQuestions.push(item.question)});
    setQuestions(newQuestions)
  };

  function handleAnalysisAndSynthesis(e: React.ChangeEvent<HTMLTextAreaElement>){
    setAnalysisAndSynthesisProcess(e.target.value);
  }

  return (
    <FlexLayout navigationType="Accordion" defaultOpen={0}>
      <Box w={"100%"} display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"}>
        <Header text="Protocol" />
        <Progress w={"100%"} value={66} />
        <FormControl sx={formControl}>
          <InteractiveTable onSave={handleSave} />
          <TextAreaInput label="Analysis and Synthesis" placeholder="Enter your analysis" onChange={handleAnalysisAndSynthesis}/>
        </FormControl>
        <Box sx={buttonBox}>
          <NavButton event={sendData} text="Save Protocol" path="/newRevision/identification" />
        </Box>
      </Box>
    </FlexLayout>
  );
}
