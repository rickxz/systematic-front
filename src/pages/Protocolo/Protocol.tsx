import { Box, FormControl, Flex, Progress } from "@chakra-ui/react";
import Header from "../../components/ui/Header/Header";
import NavButton from "../../components/Buttons/NavButton";
import { btnBox, formControl } from "./styles/partOneStyles";
import TextAreaInput from "../../components/Inputs/InputTextArea";
import FlexLayout from "../../components/ui/Flex/Flex";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useCreateProtocol from "../../hooks/revisions/useCreateProtocol";
import axios from "../../interceptor/interceptor";

export default function Protocol() {
  const [goal, setGoal] = useState('');
  const [mainQuestion, setMainQuestion] = useState('');
  const { id = '' } = useParams();

  useEffect(() => {
    async function fetchValues(){
      const url = `http://localhost:8080/systematic-study/${id}/protocol`;
      let response = await axios.get(url, {withCredentials: true});

      setGoal(response.data.content.goal)
      setMainQuestion(response.data.content.justification);
    }
    
    fetchValues();
  }, [])

  async function handleData(){
    console.log(goal);
    console.log(mainQuestion);
    await useCreateProtocol({goal, mainQuestion, id, retry: true})
    window.location.href = `http://localhost:5173/#/newRevision/protocolpartTwo/${id}`;
  }

  async function alert(){
    window.alert("Todos os campos do protocolo precisam estar preenchidos");
  }

  function handleGoal(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    setGoal(e.target.value);
  }

  function handleMainQuestion(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
    setMainQuestion(e.target.value);
  }

  return (
    <FlexLayout defaultOpen={0} navigationType="Accordion">
      <Box w={"100%"}>
        <Header text="Protocol" />
        <Progress value={33} w={"100%"} />
        <Flex justify={"center"} direction={"column"}>
          <FormControl sx={formControl}>
            <TextAreaInput value={goal} label="Objectives:" placeholder="What are your goals?" onChange={handleGoal}/>
            <TextAreaInput value={mainQuestion} label="Main question:" placeholder="The reason behind your research..." onChange={handleMainQuestion}/>
          </FormControl>

          <Box sx={btnBox}>
          {goal == '' && mainQuestion == '' ? <NavButton event={alert} text="Create new Review" /> :
          <NavButton event={handleData} text="Next" />
          }
          </Box>
        </Flex>
      </Box>
    </FlexLayout>
  );
}
