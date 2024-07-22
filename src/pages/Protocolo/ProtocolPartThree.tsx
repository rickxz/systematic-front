import Header from "../../components/ui/Header/Header";
import NavButton from "../../components/Buttons/NavButton";
import { Progress, FormControl, Box } from "@chakra-ui/react";
import { btnBox, conteiner } from "./styles/partTwooStyles";
import TextAreaInput from "../../components/Inputs/InputTextArea";
import InteractiveTable from "../../components/Tables/InteractiveTable";
import { Row } from "../../hooks/useInteractiveTable";
import FlexLayout from "../../components/ui/Flex/Flex";
import { useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import useCreateProtocolThree from '../../hooks/revisions/useCreateProtocolThree';

export default function ProtocolPartThree() {
  const [analysis, setAnalysis] = useState('');
  const { id = '' } = useParams();
  const navigate = useNavigate();

  async function handleData() {
      await useCreateProtocolThree(analysis, id);
  }

  function handleSave(data: Row[]) {
    const newQuestions: string[] = [];
    data.forEach((item) => {
      newQuestions.push(item.question);
    });
    setQuestions(newQuestions);
  }

  function handleAnalysisAndSynthesis(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setAnalysis(e.target.value);
  }

  return (
    <FlexLayout defaultOpen={0} navigationType="Accordion">

      <Box w={"100%"} display={"flex"}
        flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>

        <Header text="Protocol" />
        <Progress value={33} w={"100%"} />

        <FormControl sx={conteiner}>

          <InteractiveTable onSave={handleSave} />
          <TextAreaInput label="Analysis and Synthesis" placeholder="Enter your analysis" onChange={handleAnalysisAndSynthesis} />

        </FormControl>

        <Box sx={btnBox}>
          <NavButton text="save" event={handleData} w={"fit-content"} />
        </Box>

      </Box>

    </FlexLayout>
  );
}
